import { configureStore } from '@reduxjs/toolkit'
import addPizzaSlice from './addPizzaSlice'

export const store = configureStore({
  reducer: {
    pizza: addPizzaSlice,
  },
})