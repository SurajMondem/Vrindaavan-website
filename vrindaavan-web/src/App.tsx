import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/Landing'
import LandingMessage from './components/LandingMessage'
import Programs from './components/Programs'
import Values from './components/Values'
import Founders from './components/Founders'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <LandingMessage />
      <Programs />
      <Values />
      <Founders />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
