// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export function App() {
  const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    const getContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(getContacts);

    if (parsedContacts !== 0) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactsList = useSelector(state => state.contacts.contacts);

  // const addNewContacts = () => {
  //   const newContacts = contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  //   return newContacts;
  // };

  // const handleSubmit = ({ name, number }) => {
  //   const contact = { id: nanoid(), name, number };
  //   if (contacts.some(e => e.name === name)) {
  //     return alert(`${name} is already in contacts!`);
  //   }

  //   setContacts([contact, ...contacts]);
  // };

  // const handleDelete = event => {
  //   setContacts(contacts.filter(contact => contact.id !== event));
  // };

  // const addFilter = filterValue => {
  //   setFilter(filterValue);
  // };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        textShadow: 'rgb(232, 216, 137) 1px 0 10px',
        backgroundColor: 'rgba(0, 0, 255, 0.032)',
      }}
    >
      <>
        {contactsList.length > 0 && (
          <h3>You have {contactsList.length} contast(s)</h3>
        )}
      </>

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
