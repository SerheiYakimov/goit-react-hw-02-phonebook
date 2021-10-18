export function ContactListItem({ name, number }) {
  return (
    <li>
      <p>
        {name}:<span>{number}</span>
      </p>
    </li>
  );
}
