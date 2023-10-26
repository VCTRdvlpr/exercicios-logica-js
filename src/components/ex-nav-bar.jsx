import React from "react";
import { Link } from "react-router-dom";

const ExNavBarComponent = () =>{

    return(
        <div>
            <nav>
                <ul className="ExNavBarAlign">
                    <li>
                        <Link className="ExNavBarItemStyle" to="/ex01">
                            <button>
                                Exercício 01
                            </button>
                        </Link>
                    </li>      
                    <li>
                        <Link className="ExNavBarItemStyle" to="/ex02">
                            <button>
                                Exercício 02
                            </button>
                        </Link>
                    </li>       
                </ul>
            </nav>
        </div>
    );
}

export default ExNavBarComponent;