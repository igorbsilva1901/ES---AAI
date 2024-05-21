import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UpdateRegister() {

  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);

  const uuid = searchParams.get('uuid');

  const [register, setRegister] = useState({
    username: searchParams.get('username') || '',
    problem: searchParams.get('problem') || '',
    address: searchParams.get('address') || '',
    reference_point: searchParams.get('reference_point') || ''
  });

  async function update(){
    try {
      await axios.put(`http://localhost:3000/register/${uuid}`, register);
    } catch (error) {
        alert('Erro ao atualizar registro.');
    }
  }
  
  return (
    <div className='forms'>
        <input type="text" id="username" name='username' placeholder='Nome' value={register.username}  onChange={(e)=>setRegister({...register, [e.target.name]: e.target.value})}/>
        <input type="text" id="problem" name='problem' placeholder='Problema' value={register.problem}  onChange={(e)=>setRegister({...register, [e.target.name]: e.target.value})}/>
        <input type="text" id="address" name='address' placeholder='Endereço' value={register.address}  onChange={(e)=>setRegister({...register, [e.target.name]: e.target.value})}/> 
        <input type="text" id="reference_point" name='reference_point' placeholder='Ponto de Referência' value={register.reference_point} onChange={(e) => setRegister({ ...register, [e.target.name]: e.target.value })}/>
        <button onClick={()=>{update()}}>Atualizar</button>
    </div>      
  );
}

export default UpdateRegister;




