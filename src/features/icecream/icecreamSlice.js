import { createSlice } from "@reduxjs/toolkit"
import {ordered as cakeOrdered} from "../cake/cakeSlice"

const initialState = {
    numOfIcecreame: 20
}

const icecreamSlice = createSlice({
    name: 'icecreame',
    initialState,
    reducers : {
        ordered : state => {
            state.numOfIcecreame--
        },
        reordered : (state,action) => {
            state.numOfIcecreame += action.payload
        }
    },
    // extraReducers : {
    //     ['cake/ordered']: state => {state.numOfIcecreame--}
    // }

    extraReducers : (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIcecreame--
        })
    }
})

export default icecreamSlice.reducer
export const {ordered,restocked} = icecreamSlice.actions