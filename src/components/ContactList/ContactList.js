// import propTypes from 'prop-Types';

import { ContactListItem } from "../ContactListItem/ContactListItem";

export function ContactList({ findContact }) {
  return (
    <ul>
      {findContact().map(({ id, name, number }) => (
        <ContactListItem id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

// import propTypes from 'prop-Types';

// export function ContactList({ children }) {
//     return (<ul>
//         <ContactListItem/>
//     </ul>)
// }

// ContactList.propTypes = {
//     children: propTypes.element.isRequired;
// }
