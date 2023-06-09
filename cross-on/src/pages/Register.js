import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Register = () => {
  // const navigate = useNavigate();

  const registerUser = async () => {
    axios.post('https://django.biscuitbobby.me/register/', {
      username: name,
      email: username,
      password: password2,
      domain:domain,
      college:college,
      course:course,
      description:description,
    })
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [domain,setDomain]=useState("");
  const [college, setCollege]=useState("");
  const [course, setCourse]=useState("");
  const [description,setDescription]=useState("");
  const submitRegister = async e => {
    console.log('register');
    e.preventDefault();
    registerUser();
  }
  return (
    <div className='mx-auto'>
      <h1 className='text-4xl text-white mt-[10vh] text-center'>Register</h1>
        <form onSubmit={submitRegister} className=' mt-[10vh] flex flex-col w-[400px] mx-auto bg-white p-10 rounded-2xl'>
          <label>Username</label>
          <input type="text" placeholder="Name" className='rounded-xl h-11 p-5 border border-black mb-5' onChange={e => setName(e.target.value)}/>
          <label>Email</label>
          <input type="text" placeholder="Username" className='rounded-xl  h-11 p-5 border border-black mb-5' onChange={e => setUsername(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="Password" className='rounded-xl h-11 p-5 border border-black mb-5' onChange={e => setPassword(e.target.value)}/>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" className='rounded-xl  h-11 p-5 border border-black mb-5' onChange={e => setPassword2(e.target.value)}/>
          <div style={{color:'red', fontSize:'15px'}}>
            <br />
            {password2 !== password ? "Passwords do not match" : ""}
          </div>
          <label>Domain</label>
          <input type="text" placeholder="Domain" className='rounded-xl  h-11 p-5 border border-black mb-5' onChange={e => setDomain(e.target.value)}/>
          
          <label>College</label>
          <input type="text" placeholder="College" className='rounded-xl  h-11 p-5 border border-black mb-5' onChange={e => setCollege(e.target.value)}/>
          
          <label>Course</label>
          <input type="text" placeholder="Course" className='rounded-xl  h-11 p-5 border border-black mb-5' onChange={e => setCourse(e.target.value)}/>
          
          <label>About You</label>
          <input type="text" placeholder="About You" className='rounded-xl  h-11 p-5 border border-black mb-5' onChange={e => setDescription(e.target.value)}/>
          
        
          <button type="submit" className='bg-blue-600 mt-5 rounded-xl w-48 h-11 p-2 flex justify-center text-white'>Register</button>
        </form>
    </div>
  )
}

export default Register