import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">GitHub</strong> Streak
      </h1>
      <GitHubCalendar
        username="nimarta-tejwani"
        blockSize={15}
        blockMargin={5}
        color="#87bccb"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
