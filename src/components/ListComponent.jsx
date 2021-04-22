import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faHome,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default class ListComponent extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  deleteData(id) {
    fetch("http://localhost:3000/resturant/" + id, {
      method: "Delete",
    }).then((resp) => {
      resp.json().then((res) => {
        alert("Record deleted");
        this.getData();
      });
    });
  }

  getData() {
    fetch("http://localhost:3000/resturant").then((resp) => {
      resp.json().then((res) => {
        this.setState({ list: res });
      });
    });
  }
  render() {
    return (
      <>
        <h1>Resto employee list</h1>
        {this.state.list ? (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee Name</th>
                  <th>Employee age</th>
                  <th>Employee Email</th>
                  <th>Employee Mobile</th>
                  <th colSpan="2">Operations</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    </td>
                    <td>
                      <span onClick={() => this.deleteData(item.id)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          color="blue"
                          style={{ cursor: "pointer" }}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <p>Please wait.....</p>
        )}
      </>
    );
  }
}
