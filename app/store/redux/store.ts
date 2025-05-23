import { configureStore } from '@reduxjs/toolkit'
import  favoritesSlice  from './favoritesSlice'
// ...

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;