import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button'
import ScoreBoard from '../components/ScoreBoard'
import { Hand } from '../enums/Hand'
import PickHand from '../components/pickHand'
import Play from '../components/play'
import { useAppContext } from '../contexts/AppContext'
import { useHandContext } from '../contexts/HandContext'
import RulesModal  from '../components/modal/RulesModal'
import Footer from '../components/layout/Footer'

const Home: NextPage = () => {
  const { hand, setHand } = useHandContext();


  return (
    <div className="container mx-auto h-screen">
      {/* Score */}
      <ScoreBoard />

      {/* Game */}
      {hand === 0 ? <PickHand setPlayerHand={setHand}/> : <Play />}

      {/* Rules */}
      <Footer/>
    </div>
  )
}

export default Home
