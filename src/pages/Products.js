import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "../redux/slices/productsSlice";
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
  const dispatch = useDispatch();
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const products = useSelector(selectProducts);

  useEffect(() => {
    const promise = dispatch(getProducts());

    return () => {
      promise.abort();
    };
  }, []);

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Grid>
        {products &&
          products.map((product) => (
            <Product key={product.id} value={product} />
          ))}
      </Grid>
    </Container>
  );
};
