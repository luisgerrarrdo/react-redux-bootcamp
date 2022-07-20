import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PRODUCTS_RESOURCE } from "../constants/global";
import { setIsAuthentiocated } from "../redux/slices/productsSlice";
import loginApi from "../utils/loginApi";

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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
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

const Input = styled.input`
  font-size: 1rem;
  margin-bottom: 16px;
  margin-top: 8px;
  border: 1px solid rgba(204, 204, 204, 0.8);
  line-height: 1.5;
  padding: 8px;
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

const SignInButton = styled.button`
  padding: 8px;
  display: flex;
  font-size: 16px;
  margin-bottom: 32px;
`;

const ImageContainer = styled.div`
  width: 16px;
`;

const Image = styled.img`
  max-width: 100%;
`;

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await loginApi(username, password);
      console.log(`login response: ${response}`);
      dispatch(setIsAuthentiocated(true));
      history.push(PRODUCTS_RESOURCE);
    } catch (e) {
      alert(e);
      console.error(e);
    }
  };

  return (
    <Container>
      <Content>
        <Title>Welcome to the WizeStore!</Title>
        <Form>
          <label htmlFor="usr">
            <b>Username</b>
          </label>
          <Input
            type="text"
            placeholder="Enter Username"
            name="usr"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <Input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
        </Form>
        <Hr />
        <SignInButton>
          <ImageContainer>
            <Image src="google_g_logo.png" alt="Google logo" />
          </ImageContainer>
          Sign in with Google
        </SignInButton>
      </Content>
    </Container>
  );
};
