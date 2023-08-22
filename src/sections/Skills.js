import { Container, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Pagination } from "../components/SkillsPagination"
import "./Skills.css";
import "../components/Pagination.css"

export const Skills = () => {
  const tecnologies = [
    {
      name: "HTML",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      progress: 80,
    },
    {
      name: "CSS",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      progress: 75,
    },
    {
      name: "JavaScript",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      progress: 65,
    },
    {
      name: "React",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      progress: 50,
    },
    {
      name: "Typescript",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      progress: 15,
    },
    {
      name: "Bootstrap",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      progress: 65,
    },
    {
      name: "Python",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      progress: 35,
    },
  ];

  const knowledges = [
    "Front-end coding",
    "Responsive web design",
    "Git and GitHub",
    "UX/UI Design",
    "Frameworks",
    "Testing and Debugging",
    "Problem Solving",
    "Creativity",
  ];

  const certifications = [
    {
      name: "JavaScript",
      certImg:
        "https://drive.google.com/file/d/1QWSRhgIsXSXz6Xl2BDqh1p9wIMgzrQQP/view",
      company: "Descomplica",
      companyLogo:
        "https://play-lh.googleusercontent.com/UXXm0h5NzCCMscjscI4noqIUOok5pTQnCD-Uag9M83bAz1GYmMFVQUo-Rol-KUvnodk",
    },
    {
      name: "HTML CSS e Bootstrap",
      certImg:
        "https://drive.google.com/file/d/1KXtIWYGTE-ApUrNdEEe85jxqbc-aJcFC/view",
      company: "Descomplica",
      companyLogo:
        "https://play-lh.googleusercontent.com/UXXm0h5NzCCMscjscI4noqIUOok5pTQnCD-Uag9M83bAz1GYmMFVQUo-Rol-KUvnodk",
    },
    {
      name: "Design Thinking, UX e Metodologias Ágeis",
      certImg: "https://drive.google.com/file/d/1jdx6maYuXlxPfvh9q_BVw754VWrd-48l/view",
      company: "Descomplica",
      companyLogo:
        "https://play-lh.googleusercontent.com/UXXm0h5NzCCMscjscI4noqIUOok5pTQnCD-Uag9M83bAz1GYmMFVQUo-Rol-KUvnodk"
    },
    {
      name: "React",
      certImg: "https://drive.google.com/file/d/11d3PbRCTIhrtIyyqjkE4DFoW3UVcjUdr/view",
      company: "Descomplica",
      companyLogo:
        "https://play-lh.googleusercontent.com/UXXm0h5NzCCMscjscI4noqIUOok5pTQnCD-Uag9M83bAz1GYmMFVQUo-Rol-KUvnodk"
    },
    {
      name: "Build Responsive Real-World Websites with HTML and CSS",
      certImg: "https://www.udemy.com/certificate/UC-16cb66b0-0a02-4406-ab48-8405bcb53a4e/",
      company: "Udemy",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqQ9UysvxOleGCjjaqkJgGH0Xrcjizi7OyklH4rz0P6EWQkBV7on769TnGkaOyxAgDPo&usqp=CAU"
    },
    {
      name: "Inteligência Artificial Fundamentos 2.0",
      certImg: "https://drive.google.com/file/d/1SJknccAr8LJqH-P7xzmD9GqHMt4eXteR/view",
      company: "Data Science Academy",
      companyLogo:
        "https://lwfiles000.mycourse.app/datascienceacademy-public/f5904fbd21fa7766fafbe89d9d428121.png"
    },
    {
      name: "Fundamentos do design da experiência do usuário (UX)",
      certImg: "https://www.coursera.org/account/accomplishments/verify/ZEG4VWSDWHNK",
      company: "Google",
      companyLogo:
        "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
    },
    {
      name: "Iniciar o processo de design de UX: criar empatia, definir e idealizar",
      certImg: "https://www.coursera.org/account/accomplishments/verify/PWBBUH46382S",
      company: "Google",
      companyLogo:
        "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
    },
    {
      name: "Criar wireframes e protótipos de baixa fidelidade",
      certImg: "https://www.coursera.org/account/accomplishments/verify/F6574G477K66",
      company: "Google",
      companyLogo:
        "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
    },
    {
      name: "Fundamentos de FrontEnd Development",
      certImg: "https://drive.google.com/file/d/1Hb3xTjpllDkj5mnuSZRfvJGTUT7YymD-/view?usp=drive_link",
      company: "Descomplica",
      companyLogo:
        "https://play-lh.googleusercontent.com/UXXm0h5NzCCMscjscI4noqIUOok5pTQnCD-Uag9M83bAz1GYmMFVQUo-Rol-KUvnodk"
    },
    ];
  

  const [currentPage, setCurrentPage] = useState(1);
  const [certsPerPage, setCertsPerPage] = useState(4);

  const renderCertifications = () => {
    return currentCerts.map((certification) => (
      <Col style={{marginBottom: "1.2rem"}}>
                <div className="d-flex gap-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      width="40px"
                      height="40px"
                      alt={`${certification.company} logo`}
                      src={certification.companyLogo}
                      />
                  </div>
                  <div
                    style={{
                      borderLeft: "1px solid #e4aa48",
                      paddingLeft: "1.2rem",
                    }}
                    >
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                      >
                      {certification.name}{" "}
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "normal",
                          fontStyle: "italic",
                          textTransform: "capitalize",
                        }}
                        >
                        &mdash; {certification.company}
                      </span>
                    </p>

                    <Button
                      target="blank"
                      className="contact-button"
                      href={certification.certImg}
                    >
                      Show certification
                    </Button>
                  </div>
                </div>
              </Col>
    ));
  };

  // Calculate the number of pages
  const pageCount = Math.ceil(certifications.length / certsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Update the number of certifications per page based on screen width
  useEffect(() => {
    const updateCertsPerPage = () => {
      if (window.innerWidth >= 1200) {
        setCertsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setCertsPerPage(4);
      } else {
        setCertsPerPage(4);
      }
    };

    window.addEventListener('resize', updateCertsPerPage);

    // Call the update function initially
    updateCertsPerPage();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCertsPerPage);
    };
  }, []);

  // Calculate the current page's certifications
  const indexOfLastCert = currentPage * certsPerPage;
  const indexOfFirstCert = indexOfLastCert - certsPerPage;
  const currentCerts = certifications.slice(indexOfFirstCert, indexOfLastCert);

  // Handle page change
  

  return (
    <div className="container-fluid">
      <Container id="skills" className="skills-section">
        <h1
          style={{
            fontSize: "3.6rem",
            fontWeight: "bold",
            color: "#dadada",
            marginBottom: "31px",
          }}
        >
          Skills <span style={{ color: "#E4AA48" }}>.</span>
        </h1>
        <div className="dash"></div>
        <div className="skills-container">
          <div className="tec-container">
            <p
              style={{
                color: "#e4aa48",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              technologies
            </p>
            <div className="tec-progress d-flex flex-column gap-3">
              {tecnologies.map((tecnologie) => (
                <Col
                  className="d-flex align-items-center gap-4"
                  key={tecnologie.id}
                >
                  <div>
                    <img
                      width="40px"
                      height="40px"
                      src={tecnologie.imgUrl}
                      alt={`${tecnologie.name} icon`}
                    />
                  </div>
                  <div className="bar-container">
                    <p
                      style={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      {tecnologie.name}
                    </p>
                    <ProgressBar
                      animated
                      variant="#e4aa48"
                      now={tecnologie.progress}
                      label={`${tecnologie.progress}%`}
                      visuallyHidden
                    />
                  </div>
                </Col>
              ))}
            </div>
          </div>
          <div className="know-container d-flex flex-column">
          <p
                style={{
                  color: "#e4aa48",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Knowledge
              </p>
            <div
              className="d-flex flex-column gap-3"
              style={{
                background: "#32323a",
                padding: "2.4rem",
                borderRadius: "10px",
              }}
            >
              
              {knowledges.map((knowledge) => (
                <Col>
                  <div className="d-flex align-items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#e4aa48"
                      class="bi bi-check2"
                      viewBox="0 0 16 16"
                      >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                    <p className="knowledge-title">{knowledge}</p>
                  </div>
                </Col>
              ))}
            </div>
          </div>
          <div className="cert-container">
            <p
              style={{
                color: "#e4aa48",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
              >
              Certifications
            </p>
          <Row lg={2} md={2} sm={1} xs={1} className="">
              {renderCertifications()}
          </Row>
          <Pagination pageCount={pageCount} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
          </div>
      </Container>
    </div>
  );
};
