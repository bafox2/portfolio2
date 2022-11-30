import type { NextPage } from 'next'
import Hero from '../Components/Hero'
import Head from 'next/head'
import Image from 'next/image'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}>
        <button onClick={returnToTop} className={styles.returnTop}>
          <div>
            <Image src="/images/up.svg" height={30} width={40} alt="return to top" />
          </div>
        </button>
        <h2 className={styles.bigHeader}>Projects</h2>
        <Projects />
        <h2 className={styles.bigHeader}>Skills</h2>
        <Skills />
      </main>
    </>
  )
}

export default Home
