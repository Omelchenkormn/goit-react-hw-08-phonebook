import { clearState } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import { useLogOutUserMutation } from 'redux/auth/authApi';
import { Button } from './LogOut.styled';

export const LogOut = () => {
  const dispatch = useDispatch();
  const [sendLogOut] = useLogOutUserMutation();

  const handleLogOut = async () => {
    try {
      await sendLogOut();
      dispatch(clearState());
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={() => handleLogOut()}>Log out</Button>;
};
