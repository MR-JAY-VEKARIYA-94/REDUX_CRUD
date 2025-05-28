import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Updateuser } from './Reducer'

  const Update = () => {
    
  const {id} = useParams();
  const users = useSelector((s) => s.users);
  const existingUser = users.filter(f => f.id === parseInt(id))[0];
  const {name, email} = existingUser;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = (event) => {
    event.preventDefault();
   
    dispatch(Updateuser({
      id : parseInt(id),
      name : newName,
      email : newEmail
    }));
    navigate("/");
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
       <div className="form-container">
          <h2 className="text-center mb-4">Update User</h2>
         <form onSubmit={handler}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className='form-control' placeholder='Enter Your Name' value={newName} onChange={e => setNewName(e.target.value)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className='form-control' placeholder="Enter Your Email" value={newEmail} onChange={e => setNewEmail(e.target.value)} required/>
            </div>
            <button type="submit" className='btn btn-success w-100'>Update</button>
          </form>
       </div>
    </div>
  )
}

export default Update
