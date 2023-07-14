import { Container } from "react-bootstrap";
import "./Projects.css";
import { Tab } from "../components/Tab";

export const Projects = () => {
  return (
    <div  id="projects" className="container-fluid"  style={{ backgroundColor: "#32323a" }}>
      <Container className="projects-section">
        <h1
          style={{
            fontSize: "3.6rem",
            fontWeight: "bold",
            color: "#dadada",
            marginBottom: "31px",
          }}
        >
          Projects <span style={{ color: "#E4AA48" }}>.</span>
        </h1>
        <div className="dash"></div>
        <Tab />
      </Container>
    </div>
  );
};
