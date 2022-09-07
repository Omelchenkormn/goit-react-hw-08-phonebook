import styled from '@emotion/styled';
import { IoIosContact } from 'react-icons/io';

export const Container = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 30px;
  margin-top: 30px;
  font-weight: 600;
`;

export const SvgIconProfile = styled(IoIosContact)`
  width: 75px;
  height: 75px;
  color: #497290;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
`;
