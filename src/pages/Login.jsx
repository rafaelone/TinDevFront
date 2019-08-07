import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import './Login.css'

export default function Login({ history }){
  const [ username, setUserName ] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    history.push('/main')
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

