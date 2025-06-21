import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productsSlice'

interface CompareState {
  items: Product[]
  maxItems: number
}

const initialState: CompareState = {
  items: [],
  maxItems: 4, // Maximum items to compare
}

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addToCompare: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (!existingItem && state.items.length < state.maxItems) {
        state.items.push(action.payload)
      }
    },
    
    removeFromCompare: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    
    clearCompare: (state) => {
      state.items = []
    },
    
    toggleCompare: (state, action: PayloadAction<Product>) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
      
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1)
      } else if (state.items.length < state.maxItems) {
        state.items.push(action.payload)
      }
    },
  },
})

export const { 
  addToCompare, 
  removeFromCompare, 
  clearCompare, 
  toggleCompare 
} = compareSlice.actions

export default compareSlice.reducer
