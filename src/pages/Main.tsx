import React from 'react'
import { useTheme } from '../context/ThemeContext'

// import sections
import Preview from '../components/Main/Preview'
import Mission from '../components/Main/Mission'
import HowItWorks from '../components/Main/HowItWorks'
import Community from '../components/Main/Community'
import Counter from '../components/Main/Counter'
import RoadMapSection from '../components/Main/RoadMapSection/RoadMapSection'
import NFTSection from '../components/Main/NFTSection/NFTSection'
import GoalsSection from '../components/Main/GoalsSection/GoalsSection'
import NewsSection from '../components/Main/NewsSection/NewsSection'
import Feedback from '../components/Main/Feedback'
import FAQSection from '../components/Main/FAQSection/FAQSection'
import PreRegistration from '../components/Main/PreRegistration'

export default function Main() {
  const { theme } = useTheme()

  return (
    <main className='mt-[200px]'>
      <Preview />
      <div className='container mx-auto px-4 3xl:px-10 flex-col'>
        <Mission />
      </div>
      <HowItWorks />
      <div className='container mx-auto px-4 3xl:px-10 flex-col'>
        <Community />
      </div>
      <Counter />
      <RoadMapSection theme={theme} />

      <div className='container mx-auto px-4 3xl:px-10'>
        <NFTSection />
        <NewsSection />
        <GoalsSection />
        <Feedback />
        <FAQSection />
      </div>
      <PreRegistration />
    </main>
  )
}
