import { useEffect, useState } from 'react'
import Register from '../../model/registerModel';

function Registers() {
    const [registers, setRegisters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/register').then((res) => {
        return res.json();
        }).then((data) => {
        console.log(data);
        setRegisters(data);
        })
    }, [])

  return (
    <div>
        <h1>Registros</h1>
        <table>
          <th>NOME</th>
          <th>PROBLEMA</th>
          <th>ENDEREÇO</th>
          <th>PONTO DE REFERÊNCIA</th>
          {registers.map((register:Register) => (
            <tr>
              <td>{register.username}</td>
              <td>{register.problem}</td>
              <td>{register.address}</td>
              <td>{register.reference_point}</td>
            </tr>
          ))}
        </table>
      </div>
  )
}

export default Registers;