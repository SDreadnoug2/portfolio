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


  const [activePanel, setActivePanel] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    //Set time on page load.
    var date = new Date();
    setActivePanel("welcome");
    setTime(`${date.getHours()}:${date.getMinutes()}`)
    //Refresh/update time.
    const interval = setInterval(() => {
      var date = new Date();
      setTime(`${date.getHours()}:${date.getMinutes()}`)
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <ActivePanelContext.Provider value={{setActivePanel, activePanel}}>
        <motion.div className='App'>
          <div className='App__left'>
              <div className="App__logo">
                <motion.img 
                className='star_s' 
                src={starS}
                initial={{scale: 1.2}}
                animate={{scale: 1}}
                transition={{type: "spring", stiffness: 600, damping: 10}}
                ></motion.img>
                <img className='logo' src={nanosGarageImg}></img>
                <motion.img 
                className='star_l' 
                src={starL}
                initial={{scale: 1.2}}
                animate={{scale: 1}}
                transition={{type: "spring", stiffness: 600, damping: 10}}
                ></motion.img>
              </div>
              <Menu/>
          </div>
          <div className="App__body">
            <p className='App__top_time'>{time}</p>
            <div className="App__top_border"></div>
            <Content/>
          </div>
          <img className='triple' src={tripleStack}></img>
        </motion.div>
      </ActivePanelContext.Provider>

  )

}

export default App
