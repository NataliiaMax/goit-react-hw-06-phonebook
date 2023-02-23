import { useDispatch } from 'react-redux';
import { setQuery } from 'redux/contacts/contactsSlice';
import style from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const inputData = event => {
    const typedData = event.target.value;
    dispatch(setQuery(typedData));
  };
  return (
    <label className={style.filterInput}>
      Find contacts by name
      <input type="text" onChange={inputData} />
    </label>
  );
}


