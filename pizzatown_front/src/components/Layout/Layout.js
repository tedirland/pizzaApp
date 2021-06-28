import React, { Children } from 'react'
import styles from './Layout.module.css'
import Head from 'next/head'

function Layout({children}) {
  return (
    <div className={styles.container}>
<Head>
  <title>Pizza Shop</title>
  <link rel='icon' href='favicon.ico' />
</Head>

<main className={styles.main}>
  {children}
</main>

<footer className={styles.footer}>Made by Ted Irland</footer>
    </div>
  )
}

export default Layout
