import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

function handleEntrar () {
  console.log(email)
  console.log(password)
}

return (
    <div>
      <form>
        <label>Email</label>
        <input 
          type='email' 
          placeholder='Digite seu email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <input 
          type='password' 
          placeholder='Digite sua senha' 
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='button' onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
}
