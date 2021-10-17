import { Component } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
// import Form from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  idName = uuid();

  hendleChange = (e) => {
    console.log(e.currentTarget.value);

    this.setState({
      name: e.currentTarget.value,
    });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    const contact = {
      name: this.state.name,
      id: this.idName,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;
    const { hendleSubmit, idName, hendleChange } = this;
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <form onSubmit={hendleSubmit}>
          <label htmlFor={idName}>
            Name
            <input
              type="text"
              name="name"
              id={idName}
              value={name}
              onChange={hendleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
