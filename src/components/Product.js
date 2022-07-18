import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../redux/slices/cartSlice";

const Article = styled.article`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 1em;
  color: black;
  cursor: pointer;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 150px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  padding: 16px 0;
`;

const Name = styled.h3`
  margin: 0px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const StyledPrice = styled.h4`
  margin: 0px;
  text-align: right;
`;

const Button = styled.button`
  margin-top: 16px;
  background-color: rgb(32, 52, 73);
  color: white;
  border: 0px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
`;

const Product = ({ value: product }) => {
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <Article>
      <ImageContainer>
        <Image src={product?.images?.[0]} alt={product.name} />
      </ImageContainer>
      <Details>
        <Name>{product.name}</Name>
        <p>{product?.categories?.[0]}</p>
        <StyledPrice>{`$ ${product.price}`}</StyledPrice>
        <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
      </Details>
    </Article>
  );
};

export default Product;
