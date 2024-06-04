import ExplainedDetails from '@/components/ExplainedDetails';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl">
        GitCord - Connect Github with Discord and receive notification on every
        git commit!
      </h1>

      <ExplainedDetails />
    </main>
  );
}
