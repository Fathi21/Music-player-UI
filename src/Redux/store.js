import { configureStore } from '@reduxjs/toolkit'
import MusicReducer from './Features/Music/MusicSlice'

export const store = configureStore({
  reducer: {
    Music: MusicReducer,
  },
})