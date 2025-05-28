import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Deleteuser } from './Reducer';


const Home = () => {
    const users = useSelector((s) => s.users)
    console.log(users);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(Deleteuser({id : id}))
    }
    
  return (
    <div className='container py-5'>

       <h2>CRUD app with JSON Server</h2>
       <div className="d-flex justify-content-end mb-3">
         <Link to="/create" className='btn btn-success'>Create +</Link>
       </div>
       <table className='table table-striped table-hover'>

           <thead className='thead-dark'>
               
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
               </tr>

           </thead>
            <tbody>
            
                { users.map((user,index)=>(
                    
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary me-2'>Update</Link >
                            <button className='btn btn-sm btn-danger' onClick={ () => handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>

                 ))}    

            </tbody>

       </table>
    
    </div>
  )
}

export default Home


// import React, { useState } from 'react';

// const MyComponent = () => {
//   // Initialize state with multiple properties
//   const [state, setState] = useState({
//     name: '',
//     age: 0,
//     email: ''
//   });

//   // Function to update state
//   const handleUpdateState = (newValues) => {
//     // Use spread operator to maintain existing state and update with new values
//     setState(prevState => ({
//       ...prevState,
//       ...newValues
//     }));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name"
//         value={state.name}
//         onChange={(e) => handleUpdateState({ name: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Age"
//         value={state.age}
//         onChange={(e) => handleUpdateState({ age: Number(e.target.value) })}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={state.email}
//         onChange={(e) => handleUpdateState({ email: e.target.value })}
//       />
//       <div>
//         <h3>Your Info:</h3>
//         <p>Name: {state.name}</p>
//         <p>Age: {state.age}</p>
//         <p>Email: {state.email}</p>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;
