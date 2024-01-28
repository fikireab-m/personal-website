import './App.css'
import { Menu } from './components/SideMenu'
import SocialBar from './components/SocialBar'
import AboutMe from './pages/About'
import Expriance from './pages/Experiance'
import Home from './pages/Home'
import Projects from './pages/Projects'
const App = () => {
  return (
    <>
      <Menu />
      <SocialBar />
      <Home />
      <AboutMe />
      <Expriance />
      <Projects />
    </>
  )
}

export default App
