import React, { useEffect, useState } from "react";
import AlertBS from "react-bootstrap/Alert";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import "./Alert.css";

export const Alert = ({ fecharAlerta }) => {
  const [progresso, setProgresso] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState("#39a2db");

  useEffect(() => {
    const timer = setTimeout(() => {
      fecharAlerta();
    }, 5000);

    const interval = setInterval(() => {
      setProgresso((prevProgresso) => prevProgresso - 20);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [fecharAlerta]);

  useEffect(() => {
    if (progresso <= 60) {
      setBackgroundColor("#f6a609");
    }
    if (progresso <= 20) {
      setBackgroundColor("#e53935");
    }
  }, [progresso]);

  const handleClose = () => {
    fecharAlerta();
  };

  return (
    <div className="alert-container">
      <ProgressBar className="a" now={progresso} />
      <AlertBS
        className="d-flex align-items-center justify-content-center"
        show={true}
        onClose={handleClose}
      >
        <AlertBS.Heading style={{ marginRight: "18px", fontSize: "1.2rem" }}>
          <div className="d-flex align-items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            Message sent
          </div>
        </AlertBS.Heading>
        <Button variant="none" className="contact-button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </Button>
      </AlertBS>
    </div>
  );
};
