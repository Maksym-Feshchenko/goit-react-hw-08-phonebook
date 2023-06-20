// import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selecrors';
import { delContactsThunk } from '../../redux/contactsThunk';

const ContactList = function () {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContact = e => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  };

  const filteredContacts = filterContact();

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}:{phone}
          </p>
          <button
            className='Button'
            data-id={id}
            onClick={() => dispatch(delContactsThunk(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactList;