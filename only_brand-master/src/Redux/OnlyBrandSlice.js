import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  favoriteproducts: [],
};

const OnlyBrandSlice = createSlice({
  name: "OnlyBrand",
  initialState,
  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    // Update the cart with a new list of products
    updateCart: (state, action) => {
      state.products = action.payload;
    },

    // Remove a product from the cart
    // removeFromCart: (state, action) => {
    //   state.products = state.products.filter(
    //     (product) => product.id !== action.payload
    //   );
    // },

    // Add a product to the wishlist
    addToWishlist: (state, action) => {
      const itemExists = state.favoriteproducts.some(
        (product) => product.id === action.payload.id
      );
      if (!itemExists) {
        state.favoriteproducts.push(action.payload);
      }
    },

    // Remove a product from the wishlist
    removeFromWishlist: (state, action) => {
      state.favoriteproducts = state.favoriteproducts.filter(
        (product) => product.id !== action.payload
      );
    },

    // Update the wishlist with a new list of products
    updateWithWishlist: (state, action) => {
      state.favoriteproducts = action.payload;
    },

     addfavoret: (state ,action)=>{
      const item = state.products.find((product) => product.id === action.payload.id);
       if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      },
    
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  updateWithWishlist,
} = OnlyBrandSlice.actions;

export default OnlyBrandSlice.reducer;
