import { useEffect, useState } from 'react'
import Register from '../../model/registerModel';
import '../themes/oldregisters.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Registers() {
    const [registers, setRegisters] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/register').then((res) => {
        return res.json();
        }).then((data) => {
        console.log(data);
        setRegisters(data);
        })
    }, [])

    async function deleteRegister(uuid){
      try{
        await axios.delete(`http://localhost:3000/register/${uuid}`);
        setRegisters(registers.filter(register => register.uuid !== uuid));
      } catch (error) {
        alert('Erro ao deletar o registro.');
      }
    }

  return (
    <div className='registersect'>
        <h1>Registros</h1>
        <table>
          <th>NOME</th>
          <th>PROBLEMA</th>
          <th>ENDEREÇO</th>
          <th>PONTO DE REFERÊNCIA</th>
          <th>AÇÕES</th>
          {registers.map((register:Register) => (
            <tr>
              <td>{register.username}</td>
              <td>{register.problem}</td>
              <td>{register.address}</td>
              <td>{register.reference_point}</td>
              <td>
                <button onClick={() => {navigate(`/updateRegister?uuid=${register.uuid}&username=${register.username}&problem=${register.problem}&address=${register.address}&reference_point=${register.reference_point}`)}}>Atualizar</button>
                <button onClick={() => {deleteRegister(register.uuid)}}>Deletar</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
  )
}

export default Registers;