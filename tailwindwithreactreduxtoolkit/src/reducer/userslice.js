import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : [],
   
}

export const user = createSlice({
    name : "user",
    initialState,
    reducers : {
        createUser : (state, action)=>{
            return void{...state , user : state.user.push({...action.payload , id : Date.now()})}
        },
        deleteUser : (state,action)=>{
           console.log(action.payload);
           return {...state , user : state.user.filter((item,index)=>{
            return item.id !== action.payload
           })}
        },
        // EditUser : (state,action)=>{
        //     return {...state , user : state.user.map((item)=>{
        //         return item.id === action.id ? 
        //     })}
        // }
    }
});

export const {createUser , deleteUser} = user.actions

export default user.reducer