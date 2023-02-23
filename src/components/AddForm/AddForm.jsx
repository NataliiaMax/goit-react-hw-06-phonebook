import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './AddForm.module.css';
import { addContacts } from 'redux/contacts/contactsSlice';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import { toast } from 'react-toastify';

const initialValues = { name: '', number: '' };
export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // const onAddContacts = () => {
  //   const newContact = { newName: name, newNumber: number };
  //   dispatch(addContacts(newContact));
  // };
  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(contact => contact.name === event.name)) {
      toast('Contact is already in contact list');
    } else dispatch(addContacts(event));

    // addUser({ name, number });
    resetForm();
  };

  const resetForm = () => {
    // initialQuery('');
  };

  return (
    <form initialValues={initialValues} onSubmit={handleSubmit}>
      <div className={style.containerInput}>
        <label className={style.formLabel}>
          Name
          <input
            className={style.formInput}
            // value='name'
            type="text"
            // onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.formLabel}>
          Number
          <input
            className={style.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={number}
            // onChange={handleChange}
          />
        </label>
      </div>
      <button
        type="submit"
        className={style.buttonForm}
        // onClick={onAddContacts}
      >
        Add contact
      </button>
    </form>
  );
}
