import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const incomingPlant = action.payload;
      const existingItem = state.items.find((item) => item.id === incomingPlant.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...incomingPlant, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const plantId = action.payload;
      state.items = state.items.filter((item) => item.id !== plantId);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.id !== id);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
