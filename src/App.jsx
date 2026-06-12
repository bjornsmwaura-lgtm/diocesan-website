import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Curia from './Pages/Curia'
import Deaneries from './Pages/Deaneries'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Curia" element={<Curia />}/>
        <Route path="/Deaneries" element={<Deaneries />}/>
        <Route path="/Events" element={<Events />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
