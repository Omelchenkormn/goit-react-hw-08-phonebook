import React from 'react';
import { Apps, Container } from './ContactsPage.styled';
import ContactForm from 'components/FormContacts/Form';
import ContactList from 'components/Contacts/Contact';
export const ContactsPage = () => {
  return (
    <Apps>
      <Container>
        <ContactForm />
        <ContactList />
      </Container>
    </Apps>
  );
};
