import './App.css'
import { Menu } from './components/SideMenu'
import SocialBar from './components/SocialBar'
import AboutMe from './pages/About'
import Home from './pages/Home'
const App = () => {
  return (
    <>
      <Menu />
      <SocialBar />
      <Home />
      <AboutMe />
    </>
  )
}

export default App
