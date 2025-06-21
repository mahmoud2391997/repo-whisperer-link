import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'

// Import reducers
import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import wishListReducer from './slices/wishListSlice'
import compareReducer from './slices/compareSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  wishList: wishListReducer,
  compare: compareReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wishList', 'compare'], // Only persist these reducers
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
