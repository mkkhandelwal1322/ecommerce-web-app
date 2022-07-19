import styled from "styled-components";

export const Input = styled.input`
  width: 87%;
  font-size: 16px;
  border: none;
  height: 50px;
  margin-bottom: 25px;
  margin-left: 35px;
  padding-left: 15px;
  outline: none;
  color: #101010;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
  &::placeholder {
    color: #333;
  }
`;
export const Button = styled.button`
  font-size: 16px;
  display: inline-block;
  padding: 10px 45px;
  background-color: #6bb7be;
  color: #fff;
  border: 1px solid #6bb7be;
  transition: all 0.2s;
  margin-left: 35px;
  margin-bottom: 25px;
  &:hover {
    background-color: transparent;
    color: #6bb7be;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 25px;
  margin-left: 35px;
  margin-top: 35px;
`;
export const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 35px;
  margin-right: 35px;
  font-size: 18px;
  line-height: 25px;
`;
