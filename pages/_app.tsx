import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import { AppContext } from '../contexts/AppContext'
import ScoreContext from '../contexts/ScoreContext';
import HandContext from '../contexts/HandContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [score, setScore] = React.useState(0);
  const [playerHand, setPlayerHand] = React.useState(0);
  
  return (
    <ScoreContext.Provider value={{ score:score, setScore: setScore } }>
      <HandContext.Provider value={{ hand:playerHand, setHand: setPlayerHand }}>
        <Head>
          <title>Rock, Paper, Scissors</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Component {...pageProps} />
      </HandContext.Provider>
    </ScoreContext.Provider>
  )
}

export default MyApp
