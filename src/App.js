import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  state = {
    people: []
  }
  componentDidMount() {
    axios.get(`${axios.defaults.baseURL}/people`)
      .then(res => {
        const people= res.data;
        this.setState({ people});
      })
  }
 
  render() {
    return (
      <ol>
        { this.state.people.map(person => <li>{person.email}</li>)}
      </ol>
    )
  }
}
class PeopleList extends React.Component {
  state = {
    email: '',
    password:'',
  }
  handleChange = event => {
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }
 
  handleSubmit = event => {
    event.preventDefault();
 
    const user= {
      email: this.state.email,
      password: this.state.password,

    };
 
    axios.post(`${axios.defaults.baseURL}/people`, { user })
      .then(res => {
        console.log(res);
      })
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input type="email" email="email" onChange={this.handleChange} />
          </label>
          <label>
            пароль:
            <input type="password" password="password" onChange={this.handleChange} />
          </label>
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    )
  }
 }
 export default App;
