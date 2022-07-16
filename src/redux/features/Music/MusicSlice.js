import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React, { useState, useEffect } from 'react';
const axios = require("axios");


export const GetAllMusic = createAsyncThunk(
  "Music/MusicList",
  fetch('http://127.0.0.1:8000/Api/GetAllMusic')
  .then(response => {
    
    return response.json();
  
  })
  .catch((error) => {
    return error;
  })
);

const initialState = {
  value: 0
}

export const MusicSlice = createSlice({
  name: 'Music',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllMusic.pending, (state) => {
      state.loading = 5555;
    });
  },
})

// Action creators are generated for each case reducer function
export const { AllSongs} = MusicSlice.actions

export default MusicSlice.reducer