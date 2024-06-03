import ExplainedDetails from '@/components/ExplainedDetails';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1>
        GitCord - Connect your Discord server with GitHub to receive
        notifications with every git push!
      </h1>

      <ExplainedDetails />
    </main>
  );
}
