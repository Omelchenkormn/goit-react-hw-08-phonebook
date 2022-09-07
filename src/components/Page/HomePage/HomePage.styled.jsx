import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 90px;
`;
export const LeftHande = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(240, 242, 245);
  width: 45%;
  padding-left: 20px;
`;
export const RightHande = styled.div`
  background-color: rgb(255, 255, 255);
  min-width: 30%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: -2px 4px 16px -4px rgba(250, 245, 245, 0.74);
  -webkit-box-shadow: -2px 4px 16px -4px rgba(200, 195, 195, 0.74);
  -moz-box-shadow: -2px 4px 16px -4px rgba(15, 3, 3, 0.74);
`;

export const Title = styled.h1`
  display: flex;
  align-content: center;
  padding-bottom: 10px;
  color: rgb(24, 119, 242);
`;
export const Tizer = styled.h1`
  display: flex;
  align-items: center;
  font-size: 20px;
`;
