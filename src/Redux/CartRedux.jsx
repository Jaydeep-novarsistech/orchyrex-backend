// // cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       const { _id, title, img, desc, price } = action.payload.product;

//       const existingProduct = state.products.find((product) => product._id === _id);

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//         existingProduct.total += price;
//       } else {
//         state.products.push({
//           _id,
//           title,
//           img,
//           desc,
//           price,
//           quantity: 1,
//           total: price,
//         });
//       }

//       state.quantity += 1;
//       state.total += price;
//     },
//     incrementQuantity: (state, action) => {
//       const productId = action.payload.productId;
//       const existingProduct = state.products.find((product) => product._id === productId);

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//         existingProduct.total += existingProduct.price;
//         state.quantity += 1;
//         state.total += existingProduct.price;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const productId = action.payload.productId;
//       const existingProduct = state.products.find((product) => product._id === productId);

//       if (existingProduct && existingProduct.quantity > 1) {
//         existingProduct.quantity -= 1;
//         existingProduct.total -= existingProduct.price;
//         state.quantity -= 1;
//         state.total -= existingProduct.price;
//       }
//     },
//     removeProduct: (state, action) => {
//       const productId = action.payload.productId;
//       const removedProduct = state.products.find((product) => product._id === productId);

//       if (removedProduct) {
//         state.quantity -= removedProduct.quantity;
//         state.total -= removedProduct.total;

//         state.products = state.products.filter((product) => product._id !== productId);
//       }
//     },
//   },
// });

// export const { addProduct, incrementQuantity, decrementQuantity, removeProduct } = cartSlice.actions;
// export default cartSlice.reducer;






// CartRedux.js

// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    selectedSize: "",
  },
  reducers: {
    addProduct: (state, action) => {
      const { _id, productName, productImage, productDescription, productPrice } = action.payload.product;
      const { selectedSize } = action.payload;

      const existingProduct = state.products.find((product) => product._id === _id);

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.total += productPrice;
      } else {
        state.products.push({
          _id,
          productName,
          productImage,
          productDescription,
          productPrice,
          size: selectedSize,
          quantity: 1,
          total: productPrice,
        });
      }

      state.quantity += 1;
      state.total += productPrice;
      state.selectedSize = selectedSize;
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload.productId;
      const existingProduct = state.products.find((product) => product._id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.total += existingProduct.productPrice;
        state.quantity += 1;
        state.total += existingProduct.productPrice;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload.productId;
      const existingProduct = state.products.find((product) => product._id === productId);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        existingProduct.total -= existingProduct.productPrice;
        state.quantity -= 1;
        state.total -= existingProduct.productPrice;
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload.productId;
      const removedProduct = state.products.find((product) => product._id === productId);

      if (removedProduct) {
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.total;

        state.products = state.products.filter((product) => product._id !== productId);
      }
    },
  },
});

export const { addProduct, incrementQuantity, decrementQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
  














// CartRedux.js

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//     selectedSize: "", // New property for selected size
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       const { _id, title, img, desc, price } = action.payload.product;
//       const { selectedSize } = action.payload; // Get selected size from action payload

//       const existingProduct = state.products.find((product) => product._id === _id);

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//         existingProduct.total += price;
//       } else {
//         state.products.push({
//           _id,
//           title,
//           img,
//           desc,
//           price,
//           size: selectedSize, // Use the selected size
//           quantity: 1,
//           total: price,
//         });
//       }

//       state.quantity += 1;
//       state.total += price;
//       state.selectedSize = selectedSize; // Update selected size in the state
//     },
//     incrementQuantity: (state, action) => {
//       const productId = action.payload.productId;
//       const existingProduct = state.products.find((product) => product._id === productId);

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//         existingProduct.total += existingProduct.price;
//         state.quantity += 1;
//         state.total += existingProduct.price;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const productId = action.payload.productId;
//       const existingProduct = state.products.find((product) => product._id === productId);

//       if (existingProduct && existingProduct.quantity > 1) {
//         existingProduct.quantity -= 1;
//         existingProduct.total -= existingProduct.price;
//         state.quantity -= 1;
//         state.total -= existingProduct.price;
//       }
//     },
//     removeProduct: (state, action) => {
//       const productId = action.payload.productId;
//       const removedProduct = state.products.find((product) => product._id === productId);

//       if (removedProduct) {
//         state.quantity -= removedProduct.quantity;
//         state.total -= removedProduct.total;

//         state.products = state.products.filter((product) => product._id !== productId);
//       }
//     },
//     // ... other reducers
//   },
// });



// export const { addProduct, incrementQuantity, decrementQuantity, removeProduct } = cartSlice.actions;
// export default cartSlice.reducer;
