import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLogInUserMutation } from 'redux/auth/authApi';
import { setUser, setAuthToken } from 'redux/userSlice';
// import { useNavigate } from 'react-router-dom';
// import { Formik } from 'formik';
import { Button, Label, Input, Forms, ButtonReg, HR } from './FormLogIn.styled';
import { useNavigate } from 'react-router-dom';

// const initialValues = {
//   email: '',
//   password: '',
// };

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
        // goToContact();
      }
    } catch (error) {
      console.log('invalid user!');
    }
  };
  // const navigate = useNavigate();
  // const goRigistred = () => navigate('/registred', { replace: true });
  //   const [createContact, { isLoading }] = useCreateContactMutation();
  //   const { data = [] } = useFetchContactsQuery();
  //   const contacts = data;

  // const handleSubmit = (initialValues, { resetForm }) => {
  //   const { email, password } = initialValues;
  //   console.log('email', email, 'password', password);
  //   resetForm();
  //   // if (contacts.find(contact => contact.name === name)) {
  //   //   return alert(`${name} is already in contacts`);
  //   // } else {
  //   //   createContact({ name, phone });
  //   //   resetForm();
  //   // }
  // };

  return (
    <>
      <Forms
        onSubmit={handleSubmit(data => {
          logInUserHandle(data);
        })}
      >
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
        <Button type="submit">Log in</Button>
        <HR />
        <ButtonReg onClick={goToRegistrate}>Create new account</ButtonReg>
      </Forms>
    </>
  );
};

export default FormLogIn;
