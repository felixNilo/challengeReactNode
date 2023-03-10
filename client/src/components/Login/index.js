import React, { useContext, useState } from 'react';
import { ContainerLogin } from './LoginElement';
import AuthContext from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password };
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.login){
          authCtx.login();
          alert('Login success')
        }
        else alert('Login error ' + data.msg)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <ContainerLogin>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit">Log in</button>
        </form>
      </ContainerLogin>
    </>
  );
};

export default Login;
