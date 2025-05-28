import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from './Reducer'
import { Navigate, useNavigate } from 'react-router-dom'

const Create = () => {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const users = useSelector((s) => s.users)
    console.log(users);
    // fna ln addd c em pas 
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handle = (event) =>{
        event.preventDefault();
        dispatch(adduser({id: users[users.length - 1].id + 1, name, email}))
       // dispatch(adduser({id: 1, name, email}))
        navigate("/")
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
       <div className="w-50 border bg-secondary text-white p-5">
          <h1>Add New User</h1>
         <form onSubmit={handle}>
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" className='form-control'placeholder='Enter Your Name' onChange={e => setname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" className='form-control' placeholder="Enter Your Email" onChange={e => setemail(e.target.value)}/>
            </div>
            <button className='btn btn-info my-4'>Submit</button>
          </form>
       </div>
    </div>
  )
}

export default Create
