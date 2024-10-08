// import { set } from 'mongoose';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const AdmindashBoard = () => {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const postLoveLetter = async () => {
  
    console.log(name, message);
   
    

    try {
      const response = await axios.post('http://localhost:4700/loveletters/post', {
        name: name,
        message: message
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error posting the love letter!', error);
    }
    
  };

  return (
    <div>
      logged in

        <div class="w-32 h-32 border-4 border-pink-500">
          add love letter

          <input 
          type="text" 
          placeholder='name' 
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          />

          <input 
          type="text" 
          placeholder='message'
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
          />
          <button onClick={()=>{postLoveLetter()}}>Submit</button>
       
        </div>


    </div>
  )
}

export default AdmindashBoard