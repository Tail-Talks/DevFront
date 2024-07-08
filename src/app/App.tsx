import React from 'react'
import '@fontsource-variable/rubik'
import Modal from 'react-modal'
import Header from '../components/Header'
import Main from '../pages/Main'
import Footer from '../components/Footer'

Modal.setAppElement('#root')

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
