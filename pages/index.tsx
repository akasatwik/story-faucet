import Head from "next/head";
import Faucet from "../components/Faucet";

export default function Home() {
  return (
    <>
      <Head>
        <title>STORY PROTOCOL Testnet Faucet</title>
        <meta name="description" content="STORY TESTNET FAUCET" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/story.jpeg" />
      </Head>
      <main>
        <Faucet />
      </main>
    </>
  );
}
