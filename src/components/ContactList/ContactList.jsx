import style from './ContactList.module.css';
import ContactUser from '../ContactUser/ContactUser';
import { useSelector} from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/contactsSelectors';
// import {deleteContacts} from '../../redux/contacts/contactsSlice'
export default function ContactList({ deleteUser }) {
   const contactList = useSelector(getContacts);
  const contactFilter = useSelector(getFilter);
  
    // const dispatch = useDispatch();
    const filtredContacts = contactList?.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter)
    );
  return (
    <ul className={style.listUsers}>
      {filtredContacts.map(({ id, name, number }) => {
        return (
          <ContactUser
            // deleteUser={deleteContacts}
            key={id}
            name={name}
            number={number}
            userId={id}
          />
        );
      })}
    </ul>
  );
}
