export const { REACT_APP_API_KEY: API_KEY } = process.env;
export const BASE_API_URL =
  "https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api";

export const PRODUCTS_RESOURCE = "products";
export const ORDERS_RESOURCE = "orders";

export const PRODUCTS_URL = `${BASE_API_URL}/${PRODUCTS_RESOURCE}`;
export const ORDERS_URL = `${BASE_API_URL}/${ORDERS_RESOURCE}`;
