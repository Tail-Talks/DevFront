import React from "react"
import "@fontsource-variable/rubik"
import Modal from "react-modal"
import Header from "../components/Header"
import Main from "../pages/Main"
import Footer from "../components/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SocResp from "../pages/SocResp"

Modal.setAppElement("#root")

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/socresp" element={<SocResp />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
