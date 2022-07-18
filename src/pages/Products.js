import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productsSlice";
import styled from "styled-components";
import Product from "../components/Product";

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
  const products = useSelector(selectProducts);

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
