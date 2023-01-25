import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'features/Contacts/Contact.slice';
import { filteredContacts } from 'features/Contacts/selector';

const Contact = ({ name, number, id, onDelContact }) => {
  return (
    <li className={css.item}>
      <span>
        {name}: {number}
      </span>
      <button
        className={css.contactButton}
        type="button"
        onClick={() => {
          onDelContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export const ContactList = () => {
  const contactsList = useSelector(filteredContacts);

  const dispatch = useDispatch();
  const onDelContact = id => {
    dispatch(delContact(id));
  };

  return (
    <ul>
      {contactsList.map(contact => {
        return (
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelContact={onDelContact}
            key={contact.id}
          ></Contact>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
