import React from 'react';
import { Container, Button, Label, Input, Forms } from './FormRegistred.styled';
import { useCreateUserMutation } from 'redux/auth/authApi';
import { setUser, setAuthToken } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const FormRegistred = () => {
  const [createUser] = useCreateUserMutation();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const addNewUsers = async credentials => {
    try {
      if (credentials) {
        const { data } = await createUser({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        });
        reset();
        dispatch(
          setUser({
            name: data.name,
            email: data.email,
          })
        );
        dispatch(setAuthToken(data.token));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Forms
        onSubmit={handleSubmit(data => {
          addNewUsers(data);
        })}
      >
        <Label htmlFor="name">
          <Input
            type="text"
            name="name"
            {...register('name', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Name..."
          />
        </Label>
        <Label htmlFor="email">
          <Input
            type="email"
            name="email"
            {...register('email', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Email..."
          />
        </Label>
        <Label htmlFor="password">
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
        </Label>
        <Button type="submit">Create new user</Button>
      </Forms>
    </Container>
  );
};

export default FormRegistred;
