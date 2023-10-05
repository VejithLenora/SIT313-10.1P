import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { auth } from './firebase'; 
import Header from './RegisterHeader'; 
import Form from './RegisterForm'; 
import Footer from './RegisterFooter'; 
import {createUserWithEmailAndPassword} from 'firebase/auth';

ReactDOM.render(<div>
  <Header />
  <Form />
  <Footer />
</div>, document.getElementById('root'));

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  console.log('Register component is rendered.');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Registration form submitted');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
  
     
      window.location.href = './login'; 
    } catch (error) {

      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />


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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />

        {error && <div className="error">{error}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
