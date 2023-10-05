import React, { useState } from 'react';
import { auth } from './firebase'; 
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';

import Form from './LoginForm'; 
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput'; 


ReactDOM.render(<div>
  <Form />
  <EmailInput />
  <PasswordInput />
</div>, document.getElementById('root'));

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        {error && <div className="error">{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
