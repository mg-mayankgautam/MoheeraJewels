import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'




const AdminLogin = () => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');




  const handleloginSubmit = async () => {

    try {
      const response = await axios.post('http://localhost:4700/login', { id, password });
      console.log(response);

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
