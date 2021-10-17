import { Component } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
// import Form from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  idName = uuid();
  idNumber = uuid();

  handleChange = (e) => {
    // console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);

    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: uuid(),
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  findContact = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    if (this.state.filter.length > 0) {
      return this.state.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );
    } else {
      return this.state.contacts;
    }
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, idName, idNumber, handleChange, handleFilter } = this;
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor={idName}>
            Name
            <input
              type="text"
              name="name"
              id={idName}
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor={idNumber}>
            Number
            <input
              type="tel"
              name="number"
              id={idNumber}
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <p>Find contacts by name:</p>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={handleFilter}
          />
          <ul>
            {this.findContact().map(({ id, name, number }) => (
              <li key={id}>
                <p>
                  {name}:<span>{number}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
