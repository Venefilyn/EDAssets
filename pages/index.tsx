import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elite Dangerous Assets</title>
        <meta name='description' content='The database for all your Elite Dangerous Assets' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1><b>Welcome to the Elite Dangerous Assets</b></h1>
        <p>All Elite Dangerous assets and content in one place to download</p>
      </div>
    </div>
  );
};

export default Home;
