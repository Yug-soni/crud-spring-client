import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import AppNavBar from "./AppNavBar.component";
import { Link } from "react-router-dom";

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/clients")
      .then(response => response.json())
      .then(
        data => this.setState({ clients: data }),
        err => console.log(err)
      );
  }

  remove = async id => {
    await fetch(`http://localhost:8080/clients/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedClients = [...this.state.clients].filter(
        client => client.id !== id
      );
      this.setState({ clients: updatedClients });
    });
  };

  render() {
    const { isLoading, clients } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const clientList = clients.map(client => {
      return (
        <tr key={client.id}>
          <td style={{ whiteSpace: "nowrap" }}>{client.name}</td>
          <td>{client.email}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={`/clients/${client.id}`}
              >
                EDIT
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.remove(client.id)}
              >
                DELETE
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <AppNavBar />
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to={`/clients/new`}>
              Add Client
            </Button>
          </div>
          <h3>Clients</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="30%">Name</th>
                <th width="30%">Email</th>
                <th width="40%">Actions</th>
              </tr>
            </thead>
            <tbody>{clientList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default ClientList;
