import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { url } from './api';
import jwtDecode from 'jwt-decode';

const initialState = {
    token: localStorage.getItem("token"),
    email: "",
    firstName: "",
    lastName: "",
    idNumber: "",
    city: "",
    telephone: "",
    county: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async(values, {rejectWithValue}) => {
        try{

           const token =  await axios.post(`${url}/register`, {
                email: values.email,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                idNumber: values.idNumber,
                city: values.city,
                telephone: values.telephone,
                county: values.county,
   
            });

            localStorage.setItem("token", token.data);

            return token.data;

        }catch(err){
            console.log(err.response.data)
            return rejectWithValue(err.response.data);

        }
        
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, registerStatus: "pending"}

        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if(action.payload){

                const user = jwtDecode(action.payload)

                return{ ...state,
                token: action.payload,
                email: user.email,
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                idNumber: user.idNumber,
                city: user.city,
                telephone: user.telephone,
                county: user.county,
                registerStatus: "success",

            }
            } else return state
            
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            return{
                ...state,
                registerStatus:"rejected",
                registerError: action.payload,
            }
            
        });
    },

})

export default authSlice.reducer;