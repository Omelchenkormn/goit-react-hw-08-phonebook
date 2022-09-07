import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Label,
  Input,
  Forms,
  Error,
  SvgIconProfile,
} from './Form.styled';
import Loader from 'components/Loader/Loader';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/fetchApi';

const initialValues = {
  name: '',
  number: '',
};
const validSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .typeError('Must be a string')
    .required('Required'),
  number: yup.string().min(6).max(12).required('Required'),
});

const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data = [] } = useFetchContactsQuery();
  const contacts = data;

  const handleSubmit = (initialValues, { resetForm }) => {
    const { name, number } = initialValues;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else {
      createContact({ name, number });
      resetForm();
    }
  };

  return (
    <Formik
      validationSchema={validSchema}
      validateOnBlur={true}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Forms autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" placeholder="Type your name" />
          <Error>
            <ErrorMessage name="name" />{' '}
          </Error>
        </Label>
        <Label htmlFor="number">
          Phone
          <Input type="tel" name="number" placeholder="Type your number" />
          <Error>
            <ErrorMessage name="number" />
          </Error>
        </Label>
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader />}
          <SvgIconProfile />
        </Button>
      </Forms>
    </Formik>
  );
};

export default ContactForm;
