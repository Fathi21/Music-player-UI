import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    MusicList: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { MusicList } = musicSlice.actions

export default musicSlice.reducer