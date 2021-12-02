import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const siteTitle = "Unreal Press"
const name = "Unreal Press"
export default function Layout({ children, home }) {
    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:image"
            content="/gifs/unreal_press.gif"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/horta" type="text/css"/>
        </Head>
        <header className={styles.header}>
          <>
            <Image
              priority
              src="/gifs/unreal_press_2.gif"
              className={utilStyles.borderCircle}
              height={"244rem"}
              width={"244rem"}
              alt={name}
            />
            <h2 className={utilStyles.heading2Xl}>Print your favorite NFTs</h2>
          </>
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    )
  }