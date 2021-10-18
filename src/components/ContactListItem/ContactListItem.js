export function ContactListItem({ id, name, number }) {
  return (
    <li key={id}>
      <p>
        {name}:<span>{number}</span>
      </p>
    </li>
  );
}
