// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { setQuery } from 'features/Contacts/Contact.slice';

export const filteredContacts = state => {
  const normalizedFilter = state.contacts.filter.toLowerCase();
  return state.contacts.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};

export function Filter() {
  const dispatch = useDispatch();

  const onQueryChanged = query => {
    dispatch(setQuery(query));
  };

  // const handleChangeFilter = event => {
  //   onFilter(event.currentTarget.value);
  // };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Search contact"
        onChange={evt => onQueryChanged(evt.target.value)}
      ></input>
    </label>
  );
}

// export class Filter extends Component {
//   handleChangeFilter = event => {
//     this.props.onFilter(event.currentTarget.value);
//   };
//   render() {
//     return (
//       <label className={css.filterLabel}>
//         Find contacts by name
//         <input
//           className={css.filterName}
//           type="text"
//           name="filter"
//           placeholder="Search contact"
//           onChange={this.handleChangeFilter}
//         ></input>
//       </label>
//     );
//   }
// }
Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
