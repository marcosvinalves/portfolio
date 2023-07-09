import { Container } from "react-bootstrap";
import "../sections/About.css";
import LinkedinPic from "../assets/linkedin-pic2.jpg";

export const About = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#32323a" }}>
      <Container className="about-section">
        <h1
          style={{
            fontSize: "3.6rem",
            fontWeight: "bold",
            color: "#dadada",
            marginBottom: "31px",
          }}
        >
          About me <span style={{ color: "#E4AA48" }}>.</span>
        </h1>
        <div className="dash"></div>
        <div className="about-container">
          <div className="about-img">
            <img src={LinkedinPic} width="60%" height="60%" alt="marcos-araujo" style={{borderRadius: "50%"}}/>
          </div>
          <div className="about-text">
          <p
              style={{
                color: "#e4aa48",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Resume
            </p>
            <div className="about-title">
              I am Marcos Araújo a <span>Front-end Web Developer</span> with a
              background in <span>UI/UX Design</span>. Acting as a{" "}
              <span>freelancer</span>. Living in São Paulo, <span>Brazil</span>.
            </div>
            <div className="about-body">
              <p>
                Currently specializing in front-end to be able to apply for
                future jobs, I have been learning a lot on my own about web
                development and also with courses through e-learning platforms.
                I like to challenge myself while I'm programming or thinking
                about an upcoming project, to keep learning new things.
              </p>
              <p>
                My future wish is to work as a full-stack web developer and be
                able to develop even more complex and dynamic applications. I
                would also like to learn about mobile and cloud technologies in
                the future.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
