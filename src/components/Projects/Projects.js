import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="S.P.A.L.M."
              description="In my final year grad project, I led a team of 10 to create a groundbreaking, innovative project, first of its kind in India.
We designed and constructed a model rocket, it was equipped with a custom-built flight computer and control system, enabling it to land on its legs."
              demoLink="https://sites.google.com/view/projectspalm/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Langchain Agent"
              description="Portfolio Analysis Automation is an innovative project that aims to streamline the process of showcasing a business's work by automating the first level filtering of Portfolio Analysis of patents using Decision Tree."
              ghLink="https://github.com/SyedMohammedSameer/AI_WebApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Space Weather Forecast"
              description="Welcome to the Space Weather Forecast project, where we have developed a groundbreaking Graph Neural Network (GNN) architecture to analyze a decade's worth of data from the Solar and Heliospheric Observatory satellite."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
