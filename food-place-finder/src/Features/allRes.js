import { createSlice } from "@reduxjs/toolkit";
const initialState={
    allRes:[],
}

const allResSlice=createSlice({
    name:"allRes",
    initialState,
    reducers:{
        setAllRes:(state,action)=>{
            state.allRes=action.payload
        },
        setAllSearchRes:(state,action)=>{
            state.allRes=action.payload
        }
    }
})


export default allResSlice.reducer;
export const {setAllRes,setAllSearchRes}=allResSlice.actions;
