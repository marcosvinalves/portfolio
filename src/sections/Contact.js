import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "react-bootstrap";
import "./Contact.css";
import contactImg from "../assets/output-onlinepngtools.png";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhmtukl",
        "template_f25j0k9",
        form.current,
        "eL73ivPOFQHr5eknM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="contact-section">
      <h1
        style={{
          fontSize: "3.6rem",
          fontWeight: "bold",
          color: "#dadada",
          marginBottom: "31px",
        }}
      >
        Contact <span style={{ color: "#E4AA48" }}>.</span>
      </h1>
      <div className="dash"></div>
      <div className="d-flex flex-column">
        <p
          style={{
            color: "#e4aa48",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: "1rem",
            marginTop: "3.6rem",
          }}
        >
          Message me
        </p>
        <div className="contact-container">
          <div className="form-container">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <p
                style={{
                  fontSize: "1.3rem",
                  color: "#dadada",
                  marginBottom: "31px",
                  textAlign: "center",
                }}
              >
                Fill out the form below and leave me a message.
              </p>
              <div className="input-forms">
                <input type="text" name="user_name" placeholder="Your Name" />
              </div>
              <div className="input-forms">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                />
              </div>
              <div className="input-forms">
                <textarea name="message" placeholder="Your message" />
              </div>
              <input
                className="btn contact-button"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          <div className="contact-img"></div>
        </div>
      </div>
    </Container>
  );
};
