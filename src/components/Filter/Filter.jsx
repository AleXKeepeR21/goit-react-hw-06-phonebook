import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'features/Contacts/Contact.slice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const onQueryChanged = query => {
    dispatch(setQuery(query));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Search contact"
        value={filter}
        onChange={evt => onQueryChanged(evt.target.value)}
      ></input>
    </label>
  );
}
