import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Data";
import Update from "./Update";


const userslice = createSlice({

     name : "users",
     initialState : Data,
     reducers : {
          adduser : (state,action) => {              
               console.log(action);
               state.push(action.payload)
          },
          Updateuser : (state,action) => {
               const {id, name, email} = action.payload
               const updateuser = state.find(user => user.id==id);
               if(updateuser){
                    updateuser.name = name
                    updateuser.email = email 
                   
               }
          },
          Deleteuser : (state,action) => {
               const {id} = action.payload
               const updateuser = state.find(user => user.id==id);
               if(updateuser){
                    return state.filter(f => f.id !== id)
               }
          }
      }

})
export const {adduser,Updateuser,Deleteuser} = userslice.actions
export default userslice.reducer