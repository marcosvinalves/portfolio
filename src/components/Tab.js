import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import TabBS from "react-bootstrap/Tab";
import { Card } from "./Card";
import images from "../assets/index";
import { React, useEffect, useState } from "react";
import "./Tab.css";
import { Pagination } from "../components/Pagination";

export const Tab = () => {
  const [cards] = useState([
    {
      name: "Earth Defenders",
      type: "game",
      description:
        "Rock Paper Scissors game, based on a futuristic theme. The game will run until the player or the invader(computer) makes 5 points, after this, the game stops and shows a button to reset the match.",
      cardImg: images.earthDefenders,
      codeUrl: "https://github.com/marcosvinalves/rock-paper-scissors",
      demoUrl: "https://marcosvinalves.github.io/rock-paper-scissors/",
      tecsUsed: [images.html, images.css, images.javascript],
    },
    {
      name: "Modern Design",
      type: "design",
      description:
        "A small project, consists in a webpage who sells chairs. The page will contain a hero section, features section, testimonials and product cards.",
      cardImg: images.modernDesign,
      codeUrl: "https://github.com/marcosvinalves/modern-design",
      demoUrl: "https://marcosvinalves.github.io/modern-design/",
      tecsUsed: [images.css, images.html],
    },
    {
      name: "Omnifood",
      type: "design",
      description:
        "Consists in a fictional startup, called Omnifood, a technology company first, but with a major focus on consumer well-being through a healthy diet. The company wants to solve their clients bad diet behaviors by providing them a AI-centric approach.",
      cardImg: images.omnifood,
      codeUrl: "https://github.com/marcosvinalves/omnifood",
      demoUrl: "https://marcosvinalves.github.io/omnifood/",
      tecsUsed: [images.html, images.css, images.javascript]
    },
    {
      name: "Guess My Number",
      type: "game",
      description:
        "A game where your objective is to guess the correct number between 0 to 20, the page is built using CSS/HTML and JavaScript to make the interactions",
      cardImg: images.guessNumber,
      codeUrl: "https://github.com/marcosvinalves/guess-my-number",
      demoUrl: "https://marcosvinalves.github.io/guess-my-number/",
      tecsUsed: [images.html, images.css, images.javascript]
    },
    {
      name: "Etch-A-Sketch",
      type: "game",
      description:
        "On the page, the user will find a sketch in which he can draw, selecting colors and different frame sizes.",
      cardImg: images.sketch,
      codeUrl: "https://github.com/marcosvinalves/etch-a-sketch",
      demoUrl: "https://marcosvinalves.github.io/etch-a-sketch/",
      tecsUsed: [images.html, images.css, images.javascript]
    },
    {
      name: "Brand4U",
      type: "design",
      description:
        "Consists in a fictional e-commerce, who sells shoes and othe clothes.",
      cardImg: images.brand4u,
      codeUrl: "https://github.com/marcosvinalves/brand4u",
      demoUrl: "https://marcosvinalves.github.io/brand4u/",
      tecsUsed: [images.html, images.css, images.bootstrap],
    },
    {
      name: "React Pins",
      type: "application",
      description:
        "A webpage where you have some pins, that you can save in folders and store them in the browser local storage",
      cardImg: images.reactPins,
      codeUrl: "https://github.com/marcosvinalves/react-pins",
      demoUrl: "https://react-pins-two.vercel.app/",
      tecsUsed: [images.bootstrap, images.javascript, images.react],
    },
    {
      name: "Shopping Cart",
      type: "application",
      description:
        "A simple shop page, where you can add some items to the cart and save your cart to browser local storage.",
      cardImg: images.shoppingCart,
      codeUrl: "https://github.com/marcosvinalves/shopping-cart",
      demoUrl: "https://shopping-cart-two-ivory.vercel.app",
      tecsUsed: [images.typescript, images.react, images.bootstrap],
    },
  ]);
  const [filteredCards, setFilteredCards] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(2);
      }
    };

    window.addEventListener("resize", updateCardsPerPage);

    // Call the update function initially
    updateCardsPerPage();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const filterCardsByType = (selectedType) => {
    if (selectedType === "all") {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter((card) => card.type === selectedType);
      setFilteredCards(filtered);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Call the filter function initially or whenever the cards array changes
    filterCardsByType("all");
  }, [cards]);

  return (
    <TabBS.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="tab-container">
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                onClick={() => filterCardsByType("all")}
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                onClick={() => filterCardsByType("design")}
              >
                Designs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="third"
                onClick={() => filterCardsByType("game")}
              >
                Games
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="fourth"
                onClick={() => filterCardsByType("application")}
              >
                Applications
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <TabBS.Content>
            <TabBS.Pane eventKey="first">
              <Card cards={currentCards} />
              <Pagination
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                indexOfLastCard={indexOfLastCard}
                filteredCards={filteredCards}
              />
            </TabBS.Pane>
            <TabBS.Pane eventKey="second">
              <Card cards={currentCards} />
              <Pagination
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                indexOfLastCard={indexOfLastCard}
                filteredCards={filteredCards}
              />
            </TabBS.Pane>
            <TabBS.Pane eventKey="third">
              <Card cards={currentCards} />
              <Pagination
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                indexOfLastCard={indexOfLastCard}
                filteredCards={filteredCards}
              />
            </TabBS.Pane>
            <TabBS.Pane eventKey="fourth">
              <Card cards={currentCards} />
              <Pagination
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                indexOfLastCard={indexOfLastCard}
                filteredCards={filteredCards}
              />
            </TabBS.Pane>
          </TabBS.Content>
        </Col>
      </Row>
    </TabBS.Container>
  );
};
