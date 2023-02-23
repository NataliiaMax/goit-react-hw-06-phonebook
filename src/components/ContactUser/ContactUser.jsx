import style from './ContactUser.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contactsSlice';

export default function ContactUser() {
  const { name, number, userId} = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();
      // const elements = books.map(({ id, name, author }) => (
      //   <li key={id}>
      //     Name: {name}. Author: {author}.
      //   </li>
      // ));
  return (
    <li key={userId} className={style.itemUser}>
      <p className={style.itemText}>{name}: </p>
      <p className={style.itemText}>{number}</p>
      <button
        className={style.buttonDelete}
        onClick={() => dispatch(deleteContacts(userId))}
      >
        Delete
      </button>
    </li>
  );
}

