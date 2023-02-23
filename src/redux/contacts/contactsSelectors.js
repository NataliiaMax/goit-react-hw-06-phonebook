// export const selectFilteredFriendsContacts = state => {
//   return state.contacts.contacts.filter(contact => {
//     return contact.firstName
//       .toLowerCase()
//       .includes(state.contacts.query.toLowerCase());
//   });
// };

// export const selectContactById = id => state => {
//   return state.contacts.contacts.find(contact => contact.id === id);
// };
export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.contacts.filter;