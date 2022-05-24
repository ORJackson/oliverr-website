import { Hero } from '../components/Hero';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Oliver R Jackson</title>
      </Head>
      <Hero />
    </div>
  );
};

export default Home;