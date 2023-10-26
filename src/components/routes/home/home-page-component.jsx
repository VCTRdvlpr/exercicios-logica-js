import React from "react";
import ExNavBarComponent from "../../ex-nav-bar";
import HeaderComponent from "../../header";

const HomePage = () =>{

    return(
        <div>
            <HeaderComponent/>
            <div className="HomePageAlign">                
                <h1>
                    Selecione um exercício
                </h1>            
                <ExNavBarComponent/>            
            </div>
        </div>
    );
}

export default HomePage;