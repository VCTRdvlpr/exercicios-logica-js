import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () =>{
    return(
        <div className="HeaderAlign">
            <h1>
                Exercícios de Lógica
            </h1>
            <div className="HeaderBtnAlign">
                <Link to={"/"}>
                    <button>
                        Home
                    </button>
                </Link>
                <Link to={"/about"}>
                    <button>
                        Sobre
                    </button>
                </Link>
            </div>            
        </div>
    );
}

export default HeaderComponent;