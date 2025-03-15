import { useState, useContext, useEffect } from 'react'
import './App.css'
import Menu from '../Menu/Menu';
import Content from '../Content/Content';
import starS from "../../assets/title_star_S.svg";
import starL from "../../assets/title_star_L.svg";
import nanosGarageImg from "../../assets/nanos_garage.svg";
import tripleStack from '../../assets/triple_stack.svg';
import ActivePanelContext from '../../contexts/ActivePanelContext'
import { motion, AnimatePresence, scroll, spring } from 'framer-motion'
function App() {

  const [activePanel, setActivePanel] = useState(null);
  useEffect(() => {
    console.log(activePanel);
  }, [activePanel])


  return (
      <motion.div className='App'>
        <div className='App__left'>
            <div className="App__logo">
              <img className='star_s' src={starS}></img>
              <img className='logo' src={nanosGarageImg}></img>
              <img className='star_l' src={starL}></img>
            </div>
            <Menu/>
        </div>
        <div className="App__body">
          <p className='App__top_time'>3:42PM</p>
          <div className="App__top_border"></div>
          <Content/>
        </div>
        <img className='triple' src={tripleStack}></img>
      </motion.div>

  )
/*
  return (
    <motion.div className="App">
        <div className="App__header">
          <div className="App__logo">
            <img className='star_s' src={starS}></img>
            <img className='logo' src={nanosGarageImg}></img>
            <img className='star_l' src={starL}></img>
          </div>
          <div className="App__top">
            <p className='App__top_time'>3:42PM</p>
            <div className="App__top_border"></div>
          </div>
          <img className='triple' src={tripleStack}></img>
        </div>
        <div className="App__body">
          <Menu/>
          <Content/>
        </div>

    </motion.div>
  )*/
}

export default App
