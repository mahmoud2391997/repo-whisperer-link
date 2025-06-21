import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productsSlice'

interface WishListState {
  items: Product[]
}

const initialState: WishListState = {
  items: [],
}

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (!existingItem) {
        state.items.push(action.payload)
      }
    },
    
    removeFromWishList: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    
    clearWishList: (state) => {
      state.items = []
    },
    
    toggleWishList: (state, action: PayloadAction<Product>) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
      
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1)
      } else {
        state.items.push(action.payload)
      }
    },
  },
})

export const { 
  addToWishList, 
  removeFromWishList, 
  clearWishList, 
  toggleWishList 
} = wishListSlice.actions

export default wishListSlice.reducer
