import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>A website about Peanut M&Ms</h1>
            <header className="App-header">
                <img
                    src={require("./images/peanutmms.jpeg")}
                    alt="A pack of peanut M&Ms"
                    height="300"
                />
                UD CISC275 with React Hooks and TypeScript - Christopher
                Calderone - Hello World
            </header>
            <ul>
                <li> Peanuts </li>
                <li> Chocolate </li>
                <li> Goodness </li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Pros: Peaut M&Ms are the best, they are very good to
                        eat, everyone will ask for them = more friends
                    </Col>
                    <Col>
                        Cons:
                        <img
                            src={require("./images/nothing photo.jpeg")}
                            alt="Absolutely nothing"
                            height="200"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
