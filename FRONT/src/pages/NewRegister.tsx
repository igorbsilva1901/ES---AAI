import { useState } from 'react'
import '../themes/newregister.css'
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewRegister() {

    const navigate = useNavigate();

    const [register, setRegister] = useState({
        username: '',
        problem: '',
        address: '',
        reference_point: ''
    });
    async function send(){
        try {
            await axios.post("http://localhost:3000/register", {
                username: register.username,
                problem: register.problem,
                address: register.address,
                reference_point: register.reference_point
            });
            alert('Registro adicionado com sucesso!')
            navigate('/');
        } catch (error) {
            alert('Problema ao realizar o registro. Tente novamente.')
            console.log(error);
        }
    }

  return (
      <div className='forms'>
        <h1>Novo Registro</h1>
        <input type="text" id="username" name='username' placeholder='Nome' onChange={(e)=>{setRegister({...register, [e.target.name]: e.target.value})}}/>
        <input type="text" id="problem" name='problem' placeholder='Problema' onChange={(e)=>{setRegister({...register, [e.target.name]: e.target.value})}}/>
        <input type="text" id="address" name='address' placeholder='Endereço' onChange={(e)=>{setRegister({...register, [e.target.name]: e.target.value})}}/>
        <input type="text" id="reference_point" name='reference_point' placeholder='Ponto de Referência' onChange={(e)=>{setRegister({...register, [e.target.name]: e.target.value})}}/>
        <button onClick={()=>{send()}}>Adicionar</button>
    </div>
  )
}

export default NewRegister