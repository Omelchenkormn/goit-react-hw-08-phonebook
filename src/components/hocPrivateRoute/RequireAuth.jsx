import { useLocation, Navigate } from 'react-router-dom';
import authSelectors from 'redux/selector/authSelector';
import { useSelector } from 'react-redux';
const RequireAuth = ({ children }) => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);
  const location = useLocation();

  if (!isLogIn) {
    return <Navigate to={'/'} state={{ from: location }} />;
  }
  return children;
};
export { RequireAuth };
