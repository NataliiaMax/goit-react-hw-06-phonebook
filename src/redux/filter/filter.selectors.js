export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const filter = state.filter;
  const users = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  // console.log(state);
  return users.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
