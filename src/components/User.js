import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  onClickEvent(string, event) {
    console.log(string);
  }
  render() {
    const { users } = this.props; // destructing
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <th scope="row">{user.number}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>
                  <i
                    className="fas fa-edit"
                    style={{ cursor: "pointer" }}
                    onClick={this.onClickEvent.bind(this, { user })}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
User.defaultProps = {
  number: 0,
  name: "Undefined",
  surname: "Undefined",
};
User.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
};
export default User;
