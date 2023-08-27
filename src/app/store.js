import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreameReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

const store = configureStore({
    reducer : {
        cake: cakeReducer,
        icecreame: icecreameReducer,
        user: userReducer
    },
})

export default store