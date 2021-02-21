import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0; */
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(179, 44, 3, 1) 0%,
    rgba(179, 71, 3, 1) 100%
  );
`;

export const Errors = styled.div`
  color: #ff0000;
  margin-bottom: 16px;
`;

export const SupLogo = styled.sup`
  font-size: 1rem;
  margin-left: 3px;
  top: 2;
`;

export const FormWrap = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  align-self: center;
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 100px; */

  @media screen and (max-width: 480px) {
    padding: 10px;
    /* margin-bottom: 200px; */
  }
`;

export const Form = styled.form`
  background: black;
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8x;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
`;
export const FormInputTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
`;

export const FormButtonWrap = styled.div`
  display: flex;
  column-gap: 4px;
  height: 50px;
  justify-content: space-between;
`;

export const FormButtonAdd = styled.button`
  background: #0000ff;
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const FormButtonReset = styled.button`
  background: #ff0000;
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const FormButtonBack = styled.button`
  background: #ff5500;
  width: 100%;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
