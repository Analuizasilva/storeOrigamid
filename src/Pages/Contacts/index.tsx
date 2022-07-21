import React from "react";
import batePapo from "../../img/batePapo.png";
import location from "../../img/location.png";
import email from "../../img/email.png";
import { Container, Stack } from "react-bootstrap";

const Contacts = () => {
  return (
    <Container style={{ width: "20rem", marginTop: "10rem" }}>
      <h1>Contacts</h1>
      <Stack direction="vertical" gap={3}>
        <Stack direction="horizontal" gap={2}>
          <img style={{ width: "1.5rem" }} src={batePapo} />
          <div>(+351) 93552-7754</div>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <img style={{ width: "1.5rem" }} src={email} />
          <div>vortal@gmail.com</div>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <img style={{ width: "1.5rem" }} src={location} />
          <div>Rua dos Bobos, número 0 - Lisboa</div>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contacts;
