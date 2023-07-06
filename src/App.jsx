import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import About from './Components/About/About'
import Subscribers from './Components/Subscribers/Subscribers'
import Travelers from './Components/Travelers/Travelers'
import Support from './Components/Support/Support'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <Nav /> */}
      <Navbar />
      <Home />
      <About />
      <Info />
      <Support />
      <Lounge />
      <Travelers />
      <Subscribers />
      {/* <OfficeMap /> */}
      {/* <Contact /> */}
      <Footer />
      <Navbar />
    </div>
  )
}
export default App
