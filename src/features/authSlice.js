import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import  axios from 'axios';
import { baseUrl } from './api';
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

           const token =  await axios.post(`${baseUrl}/register`, {
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

        } catch(err) {
            if (err.response.status === 409) { // User already exists
                return rejectWithValue("User already exists");
            } else {
                console.log(err.response.data);
                return rejectWithValue(err.response.data);
            }
        }
        
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token;

            if (token) {
                const user = jwtDecode(token);

                return {
                    ...state,
                    token,
                    email: "",
                    firstName: "",
                    lastName: "",
                    idNumber: "",
                    city: "",
                    telephone: "",
                    county: "",
                    _id: "",
                    userLoaded: false,

                };
            }
        },
        logoutUser(state, action)   {
            localStorage.removeItem("token");

            return {
                ...state,
                token: "",
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

            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, registerStatus: "pending"}

        });

        builder.addCase(registerUser.fulfilled, (state, action) => {
  if (action.payload) {
    const user = jwtDecode(action.payload)
    return {
      ...state,
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
    };
  }
  return state; // Make sure to return state if the condition fails
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
export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;