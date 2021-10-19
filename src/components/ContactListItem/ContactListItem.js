import PropsType from "prop-types";

export function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li>
      <p>
        {name}:<span>{number}</span>
      </p>
      <button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.PropsTypes = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  number: PropsType.number.isRequired,
  onDeleteContact: PropsType.func.isRequired,
};
