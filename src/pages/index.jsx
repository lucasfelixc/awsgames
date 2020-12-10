import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>AWS Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Main />
      </main>
    </Container>
  )
}
