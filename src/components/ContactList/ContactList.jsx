import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selecrors';
import { delContactsThunk } from '../../redux/contactsThunk';
import css from './ContactList.module.css';

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
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          <p className={css.contact}>
            <span className={css.contactName}>{name}:</span>
            <span className={css.contactNumber}>{number}</span>
            <button
              className={css.deleteButton}
              data-id={id}
              onClick={() => dispatch(delContactsThunk(id))}
              type="button"
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
