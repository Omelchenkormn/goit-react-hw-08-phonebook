import { Link, Nav } from './Navigation.styled';
import authSelectors from 'redux/selector/authSelector';
import { useSelector } from 'react-redux';
import { LogOut } from 'components/LogOutButton/LogOut';

export const Navigation = () => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLogIn && <Link to="/contacts">Contacts</Link>}
      {!isLogIn && <Link to="/registred">Registred</Link>}
      {isLogIn && <LogOut />}
    </Nav>
  );
};
