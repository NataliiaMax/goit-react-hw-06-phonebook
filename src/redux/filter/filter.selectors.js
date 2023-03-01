import { getContacts } from 'redux/contacts/contactsSelectors';

export const getFilter = state => state.filter;

// console.log(state);

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const normalizedFilter = filter.toLowerCase();

  console.log(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
