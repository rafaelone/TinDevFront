import React, { useState } from 'react'
import api from '../services/api'
import logo from '../assets/logo.svg'
import './Login.css'

export default function Login({ history }){
  const [ username, setUserName ] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    const response = await api.post('/devs', {
      username
    })
    const  { _id } = response.data;

    history.push(`/dev/${_id}`)
  }

  return(
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev"/>
        <input type="text"
          name="username"
          id="username"
          value={username}
          onChange={e => setUserName(e.target.value)}
          placeholder="Digite seu usuário do GitHub"
          />
          <button> Enviar</button>
      </form>
    </div>
  )
}

