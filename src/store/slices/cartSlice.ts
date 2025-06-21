import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
  category?: string
  slug?: string
}

interface CartState {
  items: CartItem[]
  totalQuantity: number
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      
      state.totalQuantity += 1
      state.totalAmount += action.payload.price
    },
    
    removeItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload)
      
      if (itemIndex !== -1) {
        const item = state.items[itemIndex]
        state.totalQuantity -= item.quantity
        state.totalAmount -= item.price * item.quantity
        state.items.splice(itemIndex, 1)
      }
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      
      if (item) {
        const quantityDiff = action.payload.quantity - item.quantity
        state.totalQuantity += quantityDiff
        state.totalAmount += item.price * quantityDiff
        item.quantity = action.payload.quantity
        
        if (item.quantity <= 0) {
          const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
          state.items.splice(itemIndex, 1)
        }
      }
    },
    
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
