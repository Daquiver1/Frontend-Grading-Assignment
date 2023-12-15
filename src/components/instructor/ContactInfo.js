import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import iconavatar from "../../images/iconavatar.png";

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
          isInfoVisible: false,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
          isInfoVisible: false,
        },
        {
          id: 3,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
          isInfoVisible: false,
        },
        {
          id: 4,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
          isInfoVisible: false,
        },
        {
          id: 5,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "987-654-3210",
          isInfoVisible: false,
        },
      ],
    };
  }

  handleClick = (contactId) => {
    //Toggle the visibility of the contact info for clicked item
    this.setState((prevState) => ({
      contacts: prevState.contacts.map((contact) =>
        contact.id === contactId
          ? { ...contact, isInfoVisible: !contact.isInfoVisible }
          : contact
      ),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        <Container className="mt-5">
          <Row>
            {contacts.map((contact) => (
              <Col md={4} className="mb-4">
                <Card className="card-shadow" style={{ width: "18rem" }}>
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={iconavatar}
                  />
                  <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>
                      <p>
                        Faculty <br /> Arts and Design
                      </p>
                    </Card.Text>

                    <p
                      onClick={() => this.handleClick(contact.id)}
                      style={{
                        textDecoration: "underline",
                        cursor: "pointer",
                        textTransform: "uppercase",
                      }}
                    >
                      show contact info
                    </p>
                    {contact.isInfoVisible && (
                      <Card.Text>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ContactInfo;
