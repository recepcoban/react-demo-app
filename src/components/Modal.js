import React, { Component } from "react";
import User from "./User";

class Modal extends Component {
  state = {
    users: [
      {
        number: 1,
        name: "Recep",
        surname: "Çoban",
      },
      {
        number: 2,
        name: "Ahmet",
        surname: "Salih",
      },
      {
        number: 3,
        name: "Yasemin",
        surname: "Akan",
      },
      {
        number: 4,
        name: "Fatih",
        surname: "Yıldız",
      }
    ],
  };

  onClickEvent(string, event) {
    console.log(string);
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
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
                <User users={this.state.users} />
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
export default Modal;
