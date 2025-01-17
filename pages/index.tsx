import Head from "next/head";
import Faucet from "../components/Faucet";

export default function Home() {
  return (
    <>
      <Head>
        <title>Testnet Faucet</title>
        <meta name="description" content="monad devnet Facuet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/newlogo.png" />
      </Head>
      <main>
        <Faucet />
      </main>
    </>
  );
}
