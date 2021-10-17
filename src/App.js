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

    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <form onSubmit={this.hendleSubmit}>
          <label htmlFor={this.idName}>
            Name
            <input
              type="text"
              name="name"
              id={this.idName}
              value={this.state.name}
              onChange={this.hendleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
        </div>
      </div>
    );
  }
}

export default App;
