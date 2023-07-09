import Button from "react-bootstrap/Button";
import ModalBS from "react-bootstrap/Modal";
import "./ModalShowMore.css";

export function Modal({ show, onHide, card }) {
  if (!card) {
    return null;
  }

  const { cardImg, name, codeUrl, description, type, demoUrl, tecsUsed } = card;
  console.log({cardImg})
  return (
    <ModalBS
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBS.Header>
        <p className="modal-title">{name}</p>
        <div className="modal-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x-lg close-button"
            viewBox="0 0 16 16"
            onClick={onHide}
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
      </ModalBS.Header>
      <ModalBS.Body>
        <div className="modal-img">
          <img src={cardImg} width="300px" alt={`${name} showcase`} />
        </div>
        <div className="modal-text">
          <p className="modal-desc">
            <span style={{ color: "#e4aa48" }}>Description: </span>
            {description}
          </p>
          <div className="modal-info">
            <p>
              <span style={{ color: "#e4aa48" }}>Type: </span>
              {type}
            </p>
            <div className="tecs-used d-flex gap-3 align-items-center">
            <span style={{ color: "#e4aa48" }}>Tecnologies used: </span>
              {tecsUsed.map((tec, tecIndex) => (
                <div key={tecIndex}>
                  <img key={tecIndex} width="30px" height="30px" src={tec} alt={"tec"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalBS.Body>
      <ModalBS.Footer>
        <Button className="contact-button" href={demoUrl} target="blank">
          Live Demo
        </Button>
        <Button className="contact-button" href={codeUrl} target="blank">
          View Code
        </Button>
      </ModalBS.Footer>
    </ModalBS>
  );
}
