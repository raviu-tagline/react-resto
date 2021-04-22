import React, { Component } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

export default class InsertComponent extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: null,
      nameErr: null,
      age: null,
      ageErr: null,
      email: null,
      emailErr: null,
      mobile: null,
      mobileErr: null,
    };
  }

  componentDidMount() {
    console.log("props", this.props);
    if (Object.keys(this.props).length != 0) {
      fetch(
        "http://localhost:3000/resturant/" + this.props.match.params.id
      ).then((resp) => {
        resp.json().then((result) => {
          this.setState({
            id: result.id,
            name: result.name,
            age: result.age,
            email: result.email,
            mobile: result.mobile,
          });
        });
      });
    }
  }

  validation() {
    if (this.state.name != null) {
      this.setState({ nameErr: null });
      console.log(this.state.name);
    } else {
      this.setState({ nameErr: "Name invalid" });
    }

    if (this.state.age != null && !isNaN(this.state.age)) {
      this.setState({ ageErr: null });
      console.log(this.state.age);
    } else {
      this.setState({ ageErr: "age invalid" });
    }

    if (this.state.email != null) {
      this.setState({ emailErr: null });
      console.log(this.state.email);
    } else {
      this.setState({ emailErr: "email invalid" });
    }

    if (this.state.mobile != null && !isNaN(this.state.mobile)) {
      this.setState({ mobileErr: null });
      console.log(this.state.mobile);
    } else {
      this.setState({ mobileErr: "mobile invalid" });
    }

    if (
      this.state.nameErr == null &&
      this.state.ageErr == null &&
      this.state.emailErr == null &&
      this.state.mobileErr == null &&
      Object.keys(this.props).length == 0
    ) {
      console.log("test");
      this.insertData();
    } else {
      this.updateData();
    }
  }

  insertData() {
    fetch("http://localhost:3000/resturant", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((res) => {
        console.log(res);
        alert("Record inserted");
      });
    });
  }

  updateData() {
    fetch("http://localhost:3000/resturant/" + this.state.id, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((res) => {
        alert("Record updated");
      });
    });
  }

  render() {
    return (
      <>
        <Container fluid={"md"} className="mt-5">
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={(e) =>
                    this.setState({
                      name: e.target.value == "" ? null : e.target.value,
                    })
                  }
                />
                <Form.Label column sm={2} className="text-danger">
                  {this.state.nameErr ? this.state.nameErr : ""}
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Age
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="Enter your age"
                  value={this.state.age}
                  onChange={(e) =>
                    this.setState({
                      age: e.target.value == "" ? null : e.target.value,
                    })
                  }
                />
                <Form.Label column sm={2} className="text-danger">
                  {this.state.ageErr ? this.state.ageErr : ""}
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  value={this.state.email}
                  onChange={(e) =>
                    this.setState({
                      email: e.target.value == "" ? null : e.target.value,
                    })
                  }
                />
                <Form.Label className="text-danger">
                  {this.state.emailErr ? this.state.emailErr : ""}
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Mobile
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="e.g. 9123456789"
                  value={this.state.mobile}
                  onChange={(e) =>
                    this.setState({
                      mobile: e.target.value == "" ? null : e.target.value,
                    })
                  }
                />
                <Form.Label column sm={2} className="text-danger">
                  {this.state.mobileErr ? this.state.mobileErr : ""}
                </Form.Label>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button onClick={() => this.validation()}>Submit Data</Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </>
    );
  }
}
