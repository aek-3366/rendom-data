import Head from "next/head";
import dynamic from 'next/dynamic'


const HomeValueNoSSR = dynamic(() => import('../components/Homevalue'), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Test swift dynamics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeValueNoSSR />

    </>
  );
}
