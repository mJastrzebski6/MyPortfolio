import './App.css'
import {Route, Routes} from "react-router-dom"
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
