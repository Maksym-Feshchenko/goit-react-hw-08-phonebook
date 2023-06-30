import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/contactsThunk';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filters/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.filter);
  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  useEffect(() => {
    dispatch(getContactsThunk);
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList listContact={filterContact()} />
    </div>
  );
};

export default Contacts;