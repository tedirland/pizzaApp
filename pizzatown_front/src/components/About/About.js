import { styles } from 'ansi-colors'
import React from 'react'
import Styles from './About.module.css'
import Head from 'next/head'


function About() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p className={styles.description}>This is the about page...</p>

    </div>
  )
}

export default About
