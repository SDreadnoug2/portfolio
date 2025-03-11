import { useState, useContext, useEffect } from 'react'
import './App.css'
import Main from '../Main/Main';
import Header from '../Header/Header'
import Side from '../Side/Side'
import ActivePanelContext from '../../contexts/ActivePanelContext'
import { motion, AnimatePresence } from 'framer-motion'
function App() {

  const [activePanel, setActivePanel] = useState("editing");
  useEffect(() => {
    console.log(activePanel);
  }, [activePanel])
  return (
    <div className="App">
      <Side/>
      <Header activePanel={activePanel} setActivePanel={setActivePanel}/>
      <Main activePanel={activePanel}/>
    </div>

  )
}

export default App
