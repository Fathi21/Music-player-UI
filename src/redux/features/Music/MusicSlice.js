import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const MusicSlice = createSlice({
  name: 'Music',
  initialState,
  reducers: {
    AllSongs: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { AllSongs} = MusicSlice.actions

export default MusicSlice.reducer