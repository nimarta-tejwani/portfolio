import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Nimarta </span>
            from <span className="purple"> Sindh, Pakistan.</span>
            <br />I'm have done my Bachelors in Computer Science from Sukkur IBA University.
            <br />
            My expertise is in developing <span className="purple">machine learning</span> models. I have worked on a diverse range of projects, including <span className="purple">computer vision</span> and <span className="purple">natural language processing</span>. 

            I am currently immersing myself in the fascinating world of <span className="purple">generative AI</span>, acquiring the knowledge and skills to unlock the creative potential of <span className="purple">artificial intelligence</span>.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
