import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import { API_KEY, PRODUCTS_URL } from "../constants/global";

const Container = styled.section`
  width: 70%;
  margin: auto;
`;

const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  gap: 40px;
`;

export const Products = () => {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    try {
      const response = await axios.get(PRODUCTS_URL, {
        headers: { "x-api-key": API_KEY },
      });
      setProducts(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Grid>
        {products &&
          products.map((product) => (
            <Product key={product.id} value={product} />
          ))}
      </Grid>
    </Container>
  );
};
