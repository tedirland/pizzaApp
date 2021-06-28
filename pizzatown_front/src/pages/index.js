import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home.js'

export default function home() {
  return (
<Layout>
  <Home />
</Layout>
  )
}
