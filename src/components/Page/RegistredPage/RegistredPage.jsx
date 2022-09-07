import {
  Container,
  Title,
  Tizer,
  LeftHande,
  RightHande,
  Wrapper,
} from './RegistredPage.styled';
import FormRegistred from '../FormRegistred/FormRegistred';

export const RegistredPage = () => {
  return (
    <Wrapper>
      <Container>
        <LeftHande>
          <Title>phonebook</Title>
          <Tizer>create a new account and start using now</Tizer>
        </LeftHande>
        <RightHande>
          <FormRegistred />
        </RightHande>
      </Container>
    </Wrapper>
  );
};
