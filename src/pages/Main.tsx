import React from 'react'

// import sections
import Preview from '../components/Main/Preview'
import Mission from '../components/Main/Mission'
import HowItWorks from '../components/Main/HowItWorks'
import Community from '../components/Main/Community'
import Counter from '../components/Main/Counter'
import RoadMap from '../components/Main/RoadMap'
import NFT from '../components/Main/NFT'
import Goals from '../components/Main/Goals'
import News from '../components/Main/News'
import Feedback from '../components/Main/Feedback'
import FAQ from '../components/Main/FAQ'
import Epilogue from '../components/Main/Epilogue'
import PreRegistration from '../components/Main/PreRegistration'

export default function Main() {

  return (
    <main className='mt-[50px] lg:mt-[200px]'>
      <Preview />
      <Mission />
      <HowItWorks />
      <Community />
      <Counter />
      <RoadMap />
      <NFT />
      <News />
      <Goals />
      <Feedback />
      <FAQ />
      <Epilogue />
      <PreRegistration />
    </main>
  )
}
