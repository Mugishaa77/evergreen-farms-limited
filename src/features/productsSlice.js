import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from './api';

const initialState = {
  items: [],
  status: null,
  createStatus: null, 
};

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/products`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const productsCreate = createAsyncThunk(
  'products/productsCreate',
  async (values) => {
    try {
      const response = await axios.post(`${baseUrl}/products`, values);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = 'pending';
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [productsCreate.pending]: (state, action) => {
      state.createStatus = 'pending';
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.createStatus = 'success';
      state.items.push(action.payload);
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = 'rejected';
    },
  },
});

export default productsSlice.reducer;
