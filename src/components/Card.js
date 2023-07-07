import CardBS from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "./Card.css";

export const Card = ({cards}) => {
  return (
    <Row xs={1} sm={1} md={1} lg={2} xl={2} className="g-4">
      {cards.map((card, idx) => (
        <Col key={idx} className="card-container">
          <CardBS>
            <CardBS.Img variant="top" src={card.cardImg} width="350rem" height="250rem" alt={` showcase`} />
            <CardBS.Body>
              <CardBS.Title className="card-title">{card.name}</CardBS.Title>
              <CardBS.Text className="card-desc">
                <div className="d-flex justify-content-between">
                  <Button className="contact-button">Show more</Button>
                  <Button href={card.codeUrl} target="blank" className="contact-button">View code</Button>
                </div>
              </CardBS.Text>
            </CardBS.Body>
          </CardBS>
        </Col>
      ))}
    </Row>
  );
};
