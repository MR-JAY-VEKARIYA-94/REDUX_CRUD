import React, { use, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Updateuser } from './Reducer'

  const Update = () => {
    
  const {id} = useParams()
  const users = useSelector((s) => s.users)
  const exist = users.filter(f => f.id==id);
  const {name,email} = exist[0]
  const [newname,setname] = useState(name)
  const [newemail,setemail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handler = (event) => {
    event.preventDefault()
   
    dispatch(Updateuser({
      id : id,
      name : newname,
      email : newemail
    }))
    navigate("/")
  }

  

  return (
    <div>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
       <div className="w-50 border bg-secondary text-white p-5">
          <h1>Update User</h1>
         <form onSubmit={handler}>
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" name="name" className='form-control'placeholder='Enter Your Name' value={newname} onInput={e => setname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" className='form-control' placeholder="Enter Your Email" value={newemail} onInput={e => setemail(e.target.value)}/>
            </div>
            <div>
            </div>
            <button className='btn btn-info my-4'>Submit</button>
          </form>
       </div>
    </div>
    </div>
  )
}

export default Update
