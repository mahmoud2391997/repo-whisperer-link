import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id: string
  title: string
  price: number
  image: string
  category: string
  description: string
  slug: string
  rating?: number
  reviews?: number
  inStock?: boolean
  tags?: string[]
}

interface ProductsState {
  products: Product[]
  categories: string[]
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
      state.categories = [...new Set(action.payload.map(product => product.category))]
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
      if (!state.categories.includes(action.payload.category)) {
        state.categories.push(action.payload.category)
      }
    },
    
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id)
      if (index !== -1) {
        state.products[index] = action.payload
      }
    },
    
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
  },
})

export const { 
  setProducts, 
  setLoading, 
  setError, 
  addProduct, 
  updateProduct, 
  removeProduct 
} = productsSlice.actions

export default productsSlice.reducer
