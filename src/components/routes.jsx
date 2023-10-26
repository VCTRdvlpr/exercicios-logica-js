import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/home/home-page-component";
import Exercicio01 from "./routes/exercicio-01/exercicio-01-page-component";
import Exercicio02 from "./routes/exercicio-02/exercicio-02-page-component";
import AboutPage from "./routes/about/about-page-component";

const RoutesApp = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route element= { <HomePage/> } path="/" exact/>
                <Route element= { <Exercicio01/> } path="/ex01" />
                <Route element= { <Exercicio02/> } path="/ex02" />
                <Route element= { <AboutPage/> } path="/about" />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
