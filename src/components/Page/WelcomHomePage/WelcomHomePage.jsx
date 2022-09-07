import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  Wraper,
  SvgIconProfile,
} from './WelcomHomePage.styled';
import authSelectors from 'redux/selector/authSelector';

export const WelcomHomePage = () => {
  const userName = useSelector(authSelectors.getUserName);
  return (
    <Container>
      <Title>
        Welcome to our site <span>{userName}</span>
      </Title>
      <Wraper>
        <SvgIconProfile />
      </Wraper>
    </Container>
  );
};
