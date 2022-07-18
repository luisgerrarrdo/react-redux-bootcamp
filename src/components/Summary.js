import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import styled from "styled-components";

const SummaryContainer = styled.section`
  background-color: rgb(245, 245, 245);
  padding: 32px;
`;

const Button = styled.button`
  margin-top: 16px;
  width: 100%;
  background-color: rgb(32, 52, 73);
  color: white;
  border: 0px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
`;

const Summary = () => {
  const cart = useSelector(selectCart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );

  return (
    <SummaryContainer>
      <h3>Summary</h3>
      <hr />
      <div>
        <p>Items: {totalItems}</p>
      </div>
      <hr />
      <div>
        <p>Total Cost</p>
        <p>{`$${totalPrice.toFixed(2)}`}</p>
      </div>
      <Button>Checkout</Button>
    </SummaryContainer>
  );
};

export default Summary;
