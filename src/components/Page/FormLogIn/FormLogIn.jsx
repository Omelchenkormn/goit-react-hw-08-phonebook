import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLogInUserMutation } from 'redux/auth/authApi';
import { setUser, setAuthToken } from 'redux/userSlice';
import {
  WrapperForm,
  Button,
  Label,
  Input,
  Forms,
  ButtonReg,
  HR,
} from './FormLogIn.styled';
import { useNavigate } from 'react-router-dom';

const FormLogIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [logInUser] = useLogInUserMutation();
  const navigate = useNavigate();
  const goToRegistrate = () => navigate('/registred');

  const logInUserHandle = async data => {
    try {
      if (data) {
        const response = await logInUser({
          email: data.email,
          password: data.password,
        });
        reset();
        dispatch(
          setUser({
            name: response.data.user.name,
            email: response.data.user.email,
          })
        );
        dispatch(setAuthToken(response.data.token));
      }
    } catch (error) {
      console.log('invalid user!');
    }
  };
  return (
    <>
      <Forms
        onSubmit={handleSubmit(data => {
          logInUserHandle(data);
        })}
      >
        <Input
          type="email"
          name="email"
          {...register('email', {
            register: true,
            required: 'This is required',
          })}
          placeholder="Email..."
        />
        <Input
          type="password"
          name="password"
          {...register('password', {
            register: true,
            required: 'This is required',
            suggested: 'current-password',
          })}
          placeholder="Password..."
        />
        {/* </Label> */}
        <Button type="submit">Log in</Button>
        <HR />
        <ButtonReg onClick={goToRegistrate}>Create new account</ButtonReg>
        {/* </WrapperForm> */}
      </Forms>
    </>
  );
};

export default FormLogIn;
