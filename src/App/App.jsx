import ContactForm from '../components/AddForm/AddForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
// import { deleteContacts } from '../redux/contacts/contactsSlice';
// import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import style from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  //   const dispatch = useDispatch();

  // const addUser = ({ name, number }) => {
  //   const newUser = {
  //     name,
  //     id: nanoid(),
  //     number,
  //   };

  //   if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
  //     return alert(`${name} is already in contacts.`);
  //   } else if (
  //     contacts.find(el => el.number.toLowerCase() === number.toLowerCase())
  //   ) {
  //     return alert(`${number} is already in contacts.`);
  //   } else {
  //     setContacts([newUser, ...contacts]);
  //   }
  // };

  // const deleteUser = userId => {
  //   dispatch(deleteContacts(userId));
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // // const visibleContacts = getVisibleContacts();

  return (
    <div className={style.container}>
      <h1 className={style.titleBook}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
}
