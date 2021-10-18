import { Component } from "react";
import "./App.css";

import { Form } from "./components/Form/Form";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (contact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
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
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <Form addNewContact={this.addNewContact} />
        <div>
          <h2>Contacts</h2>
          <p>Find contacts by name:</p>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilter}
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
