export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const filter = state.filter;
  const contacts = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  // console.log(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
