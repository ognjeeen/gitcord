import { NextResponse } from 'next/server';
import axios from 'axios';

type Commit = {
  message: string;
  url: string;
  timestamp: string;
};

type Repository = {
  full_name: string;
};

type Sender = {
  login: string;
  html_url: string;
  avatar_url: string;
};

type WebhookRequestBody = {
  commits: Commit[];
  repository: Repository;
  sender: Sender;
};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: WebhookRequestBody = await req.json();
    console.log('Received body:', body);

    const { commits, repository, sender } = body;

    if (!commits || commits.length === 0) {
      return NextResponse.json({ error: 'No commits found' }, { status: 400 });
    }

    const commit = commits[0];
    const webhookData = {
      content: null,
      embeds: [
        {
          title: `New Commit in ${repository.full_name} repository!`,
          description: `**${commit.message}**`,
          url: commit.url,
          color: 5814783,
          author: {
            name: sender.login,
            url: sender.html_url,
            icon_url: sender.avatar_url,
          },
          footer: {
            text: `Commit made on ${new Date(
              commit.timestamp
            ).toLocaleString()}`,
          },
        },
      ],
    };

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!discordWebhookUrl) {
      console.error('DISCORD_WEBHOOK_URL is not defined');
      throw new Error('DISCORD_WEBHOOK_URL is not defined');
    }

    console.log('Sending webhook data to Discord:', webhookData);

    await axios.post(discordWebhookUrl, webhookData);

    return NextResponse.json({ message: 'Webhook received' });
  } catch (error: any) {
    console.error('Error sending webhook to Discord:', error.message, error);
    return NextResponse.json(
      { error: 'Error sending webhook to Discord', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
