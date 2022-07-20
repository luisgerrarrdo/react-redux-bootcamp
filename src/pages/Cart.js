import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Summary from "../components/Summary";
import {
  selectCart,
  removeFromCart,
  updateQuantity,
} from "../redux/slices/cartSlice";

const Container = styled.main`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Content = styled.section`
  min-width: 80%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: start;
  margin-top: 32px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
`;

const DetailsImage = styled.div`
  max-width: 150px;
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
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  function handleRemove(productId) {
    dispatch(removeFromCart({ productId }));
  }

  function handleQuantityChange({ productId, newQuantity }) {
    dispatch(updateQuantity({ productId, newQuantity }));
  }

  return (
    <Container>
      <Content>
        <h3>Shopping Cart</h3>
        <Hr />
        {cartItems.length === 0 && (
          <div>
            <p>Your Cart is empty - 0 products in Cart</p>
          </div>
        )}
        {cartItems.length > 0 && (
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
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) =>
                          handleQuantityChange({
                            productId: id,
                            newQuantity: Number(e.target.value),
                          })
                        }
                      />
                      <button type="button" onClick={() => handleRemove(id)}>
                        Remove
                      </button>
                    </Quatity>
                  </Td>
                  <Td>{`$${price}`}</Td>
                  <Td>{`$${(Number(price) * Number(quantity)).toFixed(2)}`}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Content>
      <Aside>
        <Summary />
      </Aside>
    </Container>
  );
};
