import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: 1,
}

export const attractionSlice = createSlice({
    name: 'attraction',
    initialState,
    reducers:{
        setAttractionID: (state, action) =>{
            state.value = action.payload
        },
    },
})

export const {setAttractionID} = attractionSlice.actions

export default attractionSlice.reducer