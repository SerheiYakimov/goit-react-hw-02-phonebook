// import propTypes from 'prop-Types';

import { ContactListItem } from "../ContactListItem/ContactListItem";

export function ContactList({ findContact, onDeleteContact }) {
  return (
    <ul>
      {findContact().map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
