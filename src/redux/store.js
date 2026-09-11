import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/CartSlice.jsx';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
