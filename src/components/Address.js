import React, { Component } from "react";

class Address extends Component {
  onClickEvent(string, event) {
    console.log(string);
  }

  render() {
    return (
      <div>
        <i
          className="fa fa-list"
          data-bs-toggle="modal"
          data-bs-target="#addressModal"
          style={{ cursor: "pointer" }}
        ></i>
        <div
          className="modal fade"
          id="addressModal"
          tabIndex="-1"
          aria-labelledby="addressModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addressModalLabel">
                  {this.props.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Country</th>
                      <th scope="col">City</th>
                      <th scope="col">ZipCode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data.map((address) => (
                      <tr>
                        <th scope="row">{address.id}</th>
                        <td>{address.country}</td>
                        <td>{address.city}</td>
                        <td>{address.zipCode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onClickEvent.bind(this, "this is bind data")}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Address;
