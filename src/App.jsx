// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import FirstRow from './components/FirstRow'
import SecondRow from './components/SecondRow'
import ThirdRow from './components/ThirdRow'
import ReactMarquee from './components/ReactMarquee'
import FourthRow from './components/FourthRow'
import WhatsappBtn from './components/WhatsappBtn'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar />
    <FirstRow />
    <SecondRow />
    <ThirdRow />
    <ReactMarquee />
    <FourthRow />
    <WhatsappBtn />
    <Footer />
    </>
  )
}

export default App
