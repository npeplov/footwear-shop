import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'
import { productAPI } from '../features/product/productAPI';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productAPI.reducerPath]: productAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
