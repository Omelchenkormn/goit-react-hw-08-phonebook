import FormLogIn from '../FormLogIn/FormLogIn';
import authSelectors from 'redux/selector/authSelector';
import { WelcomHomePage } from '../WelcomHomePage/WelcomHomePage';
import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  Tizer,
  LeftHande,
  RightHande,
  Wrapper,
} from './HomePage.styled';

export const HomePage = () => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Wrapper>
      <Container>
        <LeftHande>
          <Title>phonebook</Title>
          <Tizer>Useful application for creating and searching contacts</Tizer>
        </LeftHande>
        {isLogIn && <WelcomHomePage />}
        {!isLogIn && (
          <RightHande>
            <FormLogIn />
          </RightHande>
        )}
      </Container>
    </Wrapper>
  );
};
