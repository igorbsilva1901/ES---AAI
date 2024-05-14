import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Registers from './pages/registers'
import Home from './pages/Home'
import NewRegister from './pages/NewRegister'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/oldregisters' element={<Registers/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<NewRegister/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
