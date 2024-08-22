import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiJupyter, SiGooglecolab, SiDocker } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tool-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tool-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
