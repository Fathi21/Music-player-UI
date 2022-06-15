import { configureStore } from '@reduxjs/toolkit'
import MusicReducer from './features/Music/MusicSlice'

export const store = configureStore({
  reducer: {
    Music: MusicReducer,
  },
})