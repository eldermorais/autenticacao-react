import React,{useState, useEffect, useContext } from 'react'
import api from '../../services/api'

export const Home = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {
        api.get('/deficientes')
            .then(response => {
                setUsers(response.data);

              })
             

            
    }, [])

    return (
        <div>
            <h1>Deficientes</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.id} - {user.nome} - {user.deficiencia.descricao}</li>
                ))}
            </ul>
           
        </div>
    )
}
