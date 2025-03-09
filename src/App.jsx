import { useState } from 'react'
import './App.css'
import Main from './Main/Main'
import Header from './Header/Header'
import Side from './Side/Side'
function App() {

  return (
    <div className="App">
      <Side/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
