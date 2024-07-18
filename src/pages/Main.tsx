import React from 'react'

// import sections
import Preview from '../components/Main/Preview'
import Mission from '../components/Main/Mission'
import HowItWorks from '../components/Main/HowItWorks'
import Community from '../components/Main/Community'
import Counter from '../components/Main/Counter'
import RoadMap from '../components/Main/RoadMap'
import NFT from '../components/Main/NFT'
import GoalsSection from '../components/Main/GoalsSection/GoalsSection'
import News from '../components/Main/News'
import Feedback from '../components/Main/Feedback'
import FAQSection from '../components/Main/FAQSection/FAQSection'
import PreRegistration from '../components/Main/PreRegistration'

export default function Main() {

  return (
    <main className='mt-[200px]'>
      <Preview />
      <Mission />
      <HowItWorks />
      <Community />
      <Counter />
      <RoadMap />
      <NFT />
      <News />
      <GoalsSection />
      <Feedback />
      <FAQSection />
      <PreRegistration />
    </main>
  )
}
