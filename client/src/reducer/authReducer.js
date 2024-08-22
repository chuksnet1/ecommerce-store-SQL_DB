import { createSlice } from "@reduxjs/toolkit";



const initialStateValue = null

export const authSlice = createSlice({
    name: "auth",
    initialState: {value: initialStateValue},
    reducers: {
        //actions
        login: (state ,action)=>{
            state.value = action.payload
        },
        register: (state, action)=>{
            state.value = action.payload
        }
    }
});


export const {register, login} = authSlice.actions
export default authSlice.reducer