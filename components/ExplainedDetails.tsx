'use client';
import { useState } from 'react';

const ExplainedDetails = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        <p
          onClick={handleToggle}
          className="cursor-pointer text-white text-center"
        >
          Click here for detailed set up guide {isVisible ? '⬇️' : '⬅️'}
        </p>
        {isVisible && (
          <div className="items-center justify-center flex flex-col mt-4 w-10/12 border p-2 m-auto text-pretty text-center gap-1">
            <span className="underline mb-4">
              Longer and harder way to set up this project
            </span>
            <li>Clone my repository from GitHub</li>
            <li>Use my GitHub repository to make your own repository</li>
            <li>
              In order to find Discord Webhook, inside Discord server go into
              the ⚙️Edit Channel ➡️ Integrations ➡️ Webhooks ➡️ Create Webhook
              (if you already have one it will say 'View Webhooks')
            </li>
            <li>
              Click on created webhook, there you can edit in which channel your
              webhook will send commit notifications. You can also change name
              and picture of webhook
            </li>
            <li>
              Copy webhook URL and save it somewhere since you will need it soon
            </li>
            <li>Host project on Vercel from your GitHub repository</li>
            <li>
              Add new environment variable on Vercel - for key set
              DISCORD_WEBHOOK_URL and for value set webhook url that you copied
              earlier
            </li>
            <li>After hosting, copy domain URL of your project</li>
            <li>
              Go to your GitHub repository then ⚙️Settings ➡️ Webhooks ➡️ Add
              webhook
            </li>
            <li>
              In payload URL paste your domain URL and at the end put -
              /api/github-webhook (e.g., https://example.com/api/github-webhook)
            </li>
            <li>
              For Content type select 'application/json', leave everything else
              as default
            </li>
            <li>
              In 'Recent Deliveries' you can check if your webhook is connected
              properly. GitHub will ping (send a payload to your API route).
              There you can also see how the GitHub payload looks.
            </li>
            <li>Save everything and you are good to go!</li>

            <hr className="bg-white w-10/12 mt-4 mb-4" />
            <span className="underline mb-4">
              Shorter and easier way to set up this project
            </span>
            <li>
              If you prefer not to clone my project and upload it to a separate
              repository, you have alternative option. You can create your own
              API route named 'github-webhook' (e.g., /api/github-webhook).
            </li>
            <li className="w-10/12">
              Then, simply copy content from my 'route.ts' file and paste it in
              your API route. Afterward, continue with the remaining steps, such
              as obtaining the Discord WebHook and configuring the GitHub
              Webhook.
            </li>

            <hr className="bg-white w-10/12 mt-4 mb-4" />
            <span className="underline mb-4">NOTES! IMPORTANT!</span>
            <p>
              Your first payload sent from GitHub will{' '}
              <span className="text-red-500 font-bold underline">
                initially fail
              </span>
              . This is expected, as there are typically no commits during the
              initial setup. Don't worry. Inside the route, I've included a
              message to handle this scenario. You will find that message in the
              'Response' tab. Next commit should go through and give you{' '}
              <span className="text-green-500 font-bold underline">
                response 200
              </span>{' '}
              with message "Webhook received" inside body.
            </p>
            <p className="mt-4 mb-4">
              This is simply my personal project, so any potential damage caused
              to your GitHub account or Discord server is your responsibility! I
              hold no liability for such occurrences! If you have any inquiries
              or encounter any issues, feel free to reach out to me via Discord
              - M0xei.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ExplainedDetails;
