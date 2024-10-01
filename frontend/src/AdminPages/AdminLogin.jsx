import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth';




const AdminLogin = () => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');


  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleloginSubmit = async () => {

    try {
      const response = await axios.post('http://localhost:4700/login', { id, password });
      console.log(response.data);
      //  const decryptedToken = atob(response.data.accessToken);//not working


      const token = response.data.accessToken;
      // Split the token and taken the second
      const base64Url = token.split(".")[1];

      // Replace "-" with "+"; "_" with "/"
      const base64 = base64Url.replace("-", "+").replace("_", "/");

      const TokenDataWithoutToken = JSON.parse(window.atob(base64));
      console.log('Response:', TokenDataWithoutToken);

      const Role = TokenDataWithoutToken.role
      //console.log('brkpnt 1', Role)

      const TokenData = { role: TokenDataWithoutToken.role, RawToken: token }
      //console.log(decryptedToken);


      try {
        if (Role) {
          console.log(Role, 'brkpnt 2')
          setAuth(TokenData);//isme role set nahi ho raha
          console.log(Role, 'brkpnt 3')
          // console.log(state.prev.pathname)
          navigate('/admindashboard');
        }
        else {
          console.log(Role, 'role not found')
        }
      } catch (e) {
        console.log('e', e);
      }


    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Email ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleloginSubmit}>Log In</button>
    </div>
  )
}

export default AdminLogin
