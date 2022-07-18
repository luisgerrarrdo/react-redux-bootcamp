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
  return (
    <SummaryContainer>
      <h3>Summary</h3>
      <hr />
      <div>
        <p>Items: {2}</p>
      </div>
      <hr />
      <div>
        <p>Total Cost</p>
        <p>{`$ ${2000}`}</p>
      </div>
      <Button>Checkout</Button>
    </SummaryContainer>
  );
};

export default Summary;
