import React from "react";
import batePapo from "../../img/batePapo.png";
import location from "../../img/location.png";
import email from "../../img/email.png";
import { Col, Container, Row } from "react-bootstrap";

const Contacts = () => {
  return (
    <>
      <h1>Contacts</h1>
      <Container style={{ width: "20rem" }}>
        <Row>
          <Col>
            <img style={{ width: "2rem" }} src={batePapo} />
          </Col>
          <Col>
            <p>(+351) 93552-7754</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img style={{ width: "2rem" }} src={email} />
          </Col>
          <Col>
            <p>vortal@gmail.com</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img style={{ width: "2rem" }} src={location} />
          </Col>
          <Col>
            <address>Rua dos Bobos, número 0 - Lisboa</address>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacts;
