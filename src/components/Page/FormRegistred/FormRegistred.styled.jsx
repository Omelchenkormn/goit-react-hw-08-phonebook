import styled from '@emotion/styled';
// import { Form, Field } from 'formik';

export const Container = styled.div`
  /* width: 950px;
  height: 230px;
  background-color: rgb(240, 242, 245);
  display: flex;
  margin: 0 auto;
  justify-content: space-between; */
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 0ch;
  border-radius: 5px;
  background-color: #e7f0ff;
  width: 350px;
  height: 40px;
  background: rgb(24, 119, 242);
  color: White;
  font-size: 20px;
  margin-bottom: 15px;
  cursor: pointer;
`;
// export const ButtonReg = styled.button`
//   margin-top: 20px;
//   border: 0ch;
//   border-radius: 5px;
//   background-color: #e7f0ff;
//   width: 250px;
//   height: 40px;
//   background: rgb(66, 183, 42);
//   color: White;
//   font-size: 20px;
//   cursor: pointer;
//   margin: auto;
//   margin-left: 80px;
// `;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #c3dbff;
  border-radius: 5px;
  width: 350px;
  height: 35px;
  font-size: 15px;
  ::placeholder {
    font-size: 15px;
    padding-left: 5px;
  }
  :focus-visible {
    outline: 1px solid #2884fc;
  }
`;
// export const HR = styled.hr`
//   border: 1px solid #c3dbff;
//   width: 350px;
// `;
