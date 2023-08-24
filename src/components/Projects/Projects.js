import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aerial from "../../Assets/Projects/aerial.PNG";
import chatbot from "../../Assets/Projects/chatbot.PNG";
import fake_news from "../../Assets/Projects/fake_news.PNG";
import flower from "../../Assets/Projects/flower.png";
import fruit from "../../Assets/Projects/fruit.png";
import emojify from "../../Assets/Projects/emojify.png";
import helmet from "../../Assets/Projects/helmet.PNG";
import vehicle from "../../Assets/Projects/vehicle.png";
import scraperChat from "../../Assets/Projects/scraperChat.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emojify}
              isBlog={false}
              title="Emojify"
              description="Realtime Facial Emotion mapping to Emoticon using DeepFace, OpenCV and Flask"
              ghLink="https://github.com/nimarta-tejwani/Emojify"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vehicle}
              isBlog={false}
              title="Vehicle Monitoring"
              description="A flask based Vehicle CLassification, Tracking and Counting using YOLOv8, DeepSort, OpenCV and Flask"
              ghLink="https://github.com/nimarta-tejwani/vehicle_tracking_counting_yolov8_deepsort"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraperChat}
              isBlog={false}
              title="ScraperChat"
              description=" A Flask-based chat app using Langchain and FatsAPI. It responds to user chats with real-time scraped data from provided URLs via Beautiful Soup." 
              ghLink="https://github.com/nimarta-tejwani/scraper_chat"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helmet}
              isBlog={false}
              title="Safety Helment Detection"
              description="Safety Helmet Detection using YOLOv8 and ASOne Library"
              ghLink="https://github.com/nimarta-tejwani/Safety_Helmet_Detection_YOLOv8_AS-One.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flower}
              isBlog={false}
              title="Flower Classification"
              description="Flower classification using CNN"
              ghLink="https://github.com/nimarta-tejwani/flower_classification"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fruit}
              isBlog={false}
              title="Fruit Calories Estimation"
              description="Fruit classification using CNN model and calorie estimation"
              ghLink="https://github.com/nimarta-tejwani/Fruit_Calories_Estimation"
              // demoLink="https/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aerial}
              isBlog={false}
              title="Aerial Image Classification"
              description="Aerial Image Classification using ResNet50 model (transfer learning)"
              ghLink="https://github.com/nimarta-tejwani/aerial_image_classification"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Pharmacy Chatbot"
              description="Pharmacy chtbot using NLP"
              ghLink="https://github.com/nimarta-tejwani/pharmacy-chatbot"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fake_news}
              isBlog={false}
              title="Fake News Detection"
              description="Fake News detector using Decision Tree"
              ghLink="https://github.com/nimarta-tejwani/fake_news_detection"
              demoLink=""              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
