import React from 'react'
import '../themes/home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

  return (
    <div className='homesect'>
        <button onClick={()=>{navigate('/register')}}>Novo registro</button>
        <button onClick={()=>{navigate('/oldregisters')}}>Registros Antigos</button>
    </div>
  )
}

export default Home