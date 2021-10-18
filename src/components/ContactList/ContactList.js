// import propTypes from 'prop-Types';

import { ContactListItem } from "../ContactListItem/ContactListItem";

export function ContactList({ findContact }) {
  return (
    <ul>
      {findContact().map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
