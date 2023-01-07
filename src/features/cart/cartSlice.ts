import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  cart: ICart[]
}

interface ICart {
  id: number;
  quantity: number;
  size: string;
}

const initialState: CartState = {
  cart: []
}

export const quantitySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addproduct: (state, action: PayloadAction<ICart>) => {
      const { id, quantity, size } = action.payload
      const ind = state.cart.findIndex(el => el.id === id)
      if (ind !== -1) {
        const old = state.cart[ind].quantity
        state.cart[ind] = {...state.cart[ind], quantity: quantity + old}
      }
      else state.cart.push({ id, quantity, size })
    },
  }
})

export const { addproduct, } = quantitySlice.actions

export default quantitySlice.reducer