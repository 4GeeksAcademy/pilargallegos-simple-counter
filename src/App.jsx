import React, { useState } from "react";
import { Container } from "react-bootstrap";  // Asegúrate de importar Container
import { NavbarComponent } from './components/Navbar';  // Importar correctamente el Navbar
import LandingPage from "./pages/LandingPage";
import CounterPage from "./pages/CounterPage";

export const App = () => {
    const [currentPage, setCurrentPage] = useState("Landing");

    const pageMap = () => {
        if (currentPage === "Landing") return <LandingPage />;
        if (currentPage === "Counter") return <CounterPage />;
    };

    return (
        <div>
            <NavbarComponent currentPage={currentPage} setPage={setCurrentPage} />
            <Container>{pageMap()}</Container>
        </div>
    );
};