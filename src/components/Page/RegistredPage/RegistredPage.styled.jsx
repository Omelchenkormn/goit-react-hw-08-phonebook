import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  background-color: rgb(240, 242, 245);
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const LeftHande = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(240, 242, 245);
  flex-wrap: wrap;
  padding-left: 20px;
  /* width: 45%; */
  flex-basis: 45%;
  @media (max-width: 768px) {
    flex-basis: 80%;
    margin-bottom: 15px;
  }
`;
export const RightHande = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 15px;
  min-width: 30%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 4px 16px -4px rgba(250, 245, 245, 0.74);
  -webkit-box-shadow: -2px 4px 16px -4px rgba(200, 195, 195, 0.74);
  -moz-box-shadow: -2px 4px 16px -4px rgba(15, 3, 3, 0.74);
  @media (max-width: 768px) {
    flex-basis: 60%;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-content: center;
  color: rgb(24, 119, 242);
  padding-bottom: 10px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const Tizer = styled.h1`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
