import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [
      {
        id: 1,
        name: '85" QN95B Samsung Neo QLED 4K Smart TV (2022)',
        price: 5999.99,
        description:
          "Quantum Matrix with Mini LEDs Brilliant details shine even in daylight with Quantum Matrix Technology. Powered by a huge grid of Samsung’s ultra-precise Quantum Mini LEDs, it takes exact control of the individual zones of light in your picture for breathtaking color and contrast.",
        images: [
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QS95B_QN95B_QN85B_Q80B_Q70B_Q-Symphony_PC_708xV.jpg?$feature-benefit-jpg",
        ],
        categories: ["Television & video"],
      },
      {
        id: 2,
        name: '85" QN95B Samsung Neo QLED 4K Smart TV (2022)',
        price: 5999.99,
        description:
          "Quantum Matrix with Mini LEDs Brilliant details shine even in daylight with Quantum Matrix Technology. Powered by a huge grid of Samsung’s ultra-precise Quantum Mini LEDs, it takes exact control of the individual zones of light in your picture for breathtaking color and contrast.",
        images: [
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QS95B_QN95B_QN85B_Q80B_Q70B_Q-Symphony_PC_708xV.jpg?$feature-benefit-jpg",
        ],
        categories: ["Television & video"],
      },
      {
        id: 3,
        name: "50” Class QN90B Samsung Neo QLED 4K Smart TV (2022)",
        price: 1599.99,
        description:
          " • Brilliant details shine even in well-lit spaces/rooms with Samsung Neo QLED ultra-precise Mini LEDs.\n • Every detail bursts to life with the realistic contrast and brilliance of Quantum HDR 24X.\n • You’ve got the best view from every seat, no matter where you sit down.\n • Experience vividly realistic 3D sound that puts you in the middle of the action.",
        images: [
          "https://image-us.samsung.com/SamsungUS/home/easy-asset/02252022/01_QN65QN90BAFXZA_011_Front3_Titan-Black.jpg?$product-details-jpg",
        ],
        categories: ["Television & video"],
      },
    ],
  },
  reducers: {},
});

export const selectProducts = (state) => state.products.data;

export default productsSlice.reducer;
