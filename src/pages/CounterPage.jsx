import React from "react";
import SecondsCounter from "../components/SecondsCounter";
import { Container } from "react-bootstrap";

const CounterPage = () => {
    return (
        <Container style={{ textAlign: "center", margin: "20px" }}>
            <h1>Counter Page</h1>
            <SecondsCounter />
        </Container>
    );
};

export default CounterPage;
