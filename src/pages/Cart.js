import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Summary from "../components/Summary";
import { BASE_API_URL } from "../constants/global";

const Container = styled.main`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 32px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
`;

const DetailsImage = styled.div`
  height: 150px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Td = styled.td`
  padding: 16px;
`;

const Hr = styled.hr`
  width: 95%;
  height: 1px;
  background-color: rgb(211, 211, 212);
  border: none;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const DetailsDescription = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-left: 32px;
  flex-direction: column;
  max-width: 300px;
`;

const Aside = styled.aside`
  margin-left: 32px;
  margin-top: 32px;
  padding-top: 0px;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

const Quatity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 50%;
  margin: auto;
`;

export const Cart = () => {
  const [cartItems, setcartItems] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get(BASE_API_URL);
      const { products: productsResponse } = response.data.data;

      setcartItems(
        productsResponse.items
          .slice(-2)
          .map((item) => ({ ...item, quantity: 1 }))
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Content>
        <h3>Shopping Cart</h3>
        <Hr />
        <table>
          <thead>
            <tr>
              <th>Product details</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(({ id, images, name, quantity, price }) => (
              <tr key={id}>
                <Td>
                  <Details>
                    <DetailsImage>
                      <Image src={images[0]} alt={name} />
                    </DetailsImage>
                    <DetailsDescription>
                      <p>{name}</p>
                      <p>{`Product code: ${id}`}</p>
                    </DetailsDescription>
                  </Details>
                </Td>
                <Td>
                  <Quatity>
                    <input type="number" value={quantity} />
                    <button type="button">Remove</button>
                  </Quatity>
                </Td>
                <Td>{`$ ${price}`}</Td>
                <Td>{`$ ${Number(price) * Number(quantity)}`}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <Aside>
        <Summary />
      </Aside>
    </Container>
  );
};
