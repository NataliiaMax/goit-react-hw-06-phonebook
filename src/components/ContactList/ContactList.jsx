import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/filter/filter.selectors'; 
import style from './ContactList.module.css';
import ContactUser from '../ContactUser/ContactUser';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={style.listUsers}>
      {contacts?.map(({ id, name, number }) => {
        return (
          <ContactUser key={id} name={name} number={number} contactId={id} />
        );
      })}
    </ul>
  );
}

