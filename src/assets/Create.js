import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from './Reducer'
import { useNavigate } from 'react-router-dom'

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
       <div className="form-container">
          <h2 className="text-center mb-4">Add New User</h2>
         <form onSubmit={handle}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className='form-control' placeholder='Enter Your Name' onChange={e => setname(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className='form-control' placeholder="Enter Your Email" onChange={e => setemail(e.target.value)} required/>
            </div>
            <button type="submit" className='btn btn-success w-100'>Submit</button>
          </form>
       </div>
    </div>
  )
}

export default Create
