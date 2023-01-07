import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: ICart[]
}

interface ICart {
  id: number;
  title: string;
  size: string;
  quantity: number;
  price: number;
}

const initialState: CartState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.cart) : []
}

export const quantitySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addproduct: (state, action: PayloadAction<ICart>) => {
      const { id, quantity, size, title, price } = action.payload
      const ind = state.cart.findIndex(el => el.id === id)
      if (ind !== -1) {
        const old = state.cart[ind].quantity
        state.cart[ind] = { ...state.cart[ind], quantity: quantity + old }
      }
      else state.cart.push({ id, quantity, size, title, price })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeproduct: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const ind = state.cart.findIndex(el => el.id === id)
      state.cart.splice(ind, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  }
})

export const { addproduct, removeproduct} = quantitySlice.actions

export default quantitySlice.reducer