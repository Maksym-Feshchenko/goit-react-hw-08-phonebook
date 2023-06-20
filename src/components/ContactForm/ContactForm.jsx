import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from 'redux/contactsThunk';

import { getContacts } from '../../redux/selecrors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContactsThunk({ name, phone }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };
  const contacts = useSelector(getContacts);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          placeholder="Enter a name"
          value={name}
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          placeholder="Enter a number"
          value={phone}
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;