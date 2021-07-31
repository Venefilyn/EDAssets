import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ED Assets</title>
        <meta name="description" content="The database for all your Elite Dangerous Assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
