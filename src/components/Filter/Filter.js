import PropsType from "prop-types";

export function Filter({ value, onChange }) {
  return (
    <div>
      <h3>Find contacts by name:</h3>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
}

Filter.PropsType = {
  value: PropsType.string,
  onChange: PropsType.func.isRequired,
};
