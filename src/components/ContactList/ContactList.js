import PropsType from "prop-types";

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

ContactList.PropsType = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  number: PropsType.number.isRequired,
  onDeleteContact: PropsType.func.isRequired,
};
