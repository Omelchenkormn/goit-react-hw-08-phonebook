import styled from '@emotion/styled';

export const Container = styled.div``;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  height: 250px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const Button = styled.button`
  border: 0ch;
  border-radius: 5px;
  background-color: #e7f0ff;
  width: 90%;
  height: 40px;
  background: rgb(24, 119, 242);
  color: White;
  font-size: 20px;
  /* margin-top: 20px; */
  margin-bottom: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
    height: 35px;
  }
`;

export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #c3dbff;
  border-radius: 5px;
  padding-left: 10px;
  width: 90%;
  height: 35px;
  font-size: 15px;
  :focus-visible {
    outline: 1px solid #2884fc;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
