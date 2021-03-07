import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Address from "./components/Address";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const headers = { "Content-Type": "application/json" };
    const apiUrl = "http://localhost:8080/users";
    try {
      const response = await fetch(apiUrl, { headers });
      const data = await response.json();
      this.setState({ users: data });
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  }

  onClickEvent(string, event) {
    console.log(string);
  }

  render() {
    const appName = "React Demo App";
    const { users } = this.state;
    return (
      <div className="container">
        <Navbar name={appName} />
        <hr />
        <Modal title="Users" />
        <hr />

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Role</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.role}</td>
                <td>
                  <Address title="Address" data={user.addresses} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
