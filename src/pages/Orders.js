import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS_RESOURCE } from "../constants/global";
import {
  clearOrderResult,
  selectCartPlaceOrderLoading,
  selectCartPlaceOrderResult,
} from "../redux/slices/cartSlice";

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  margin-top: 128px;
  height: 450px;
  width: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(245, 245, 245);
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Hr = styled.hr`
  margin: 16px 0;
  width: 80%;
  height: 1px;
  background-color: rgb(211, 211, 212);
  border: none;
`;

const Button = styled.button`
  margin-top: 16px;
  width: 70%;
  background-color: rgb(32, 52, 73);
  color: white;
  border: 0px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
`;

export const Orders = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(selectCartPlaceOrderLoading);
  const { order, message } = useSelector(selectCartPlaceOrderResult);

  const handleKeepShopping = async () => {
    history.push(PRODUCTS_RESOURCE);
    dispatch(clearOrderResult);
  };

  return (
    <Container>
      <Content>
        {!order && loading && <Title>Loading...</Title>}
        {!order && !loading && <Title>No Order Data</Title>}
        {order && (
          <>
            <Title>Thank You!</Title>
            <Hr />
            <h3>{message}</h3>
            <h3>Order Number: {order}</h3>
          </>
        )}
        {!loading && (
          <Button onClick={handleKeepShopping}>Keep Shopping</Button>
        )}
      </Content>
    </Container>
  );
};
