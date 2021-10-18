export function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li>
      <p>
        {name}:<span>{number}</span>
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}
