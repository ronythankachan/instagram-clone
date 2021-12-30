import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Instagram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* feed */}
      {/* modal */}
    </div>
  );
}
