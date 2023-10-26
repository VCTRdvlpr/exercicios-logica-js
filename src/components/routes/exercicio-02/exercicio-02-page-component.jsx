import React from "react";
import HeaderComponent from "../../header";
import ExNavBarComponent from "../../ex-nav-bar";

const Exercicio02 = () =>{

    const impares = new Array(10);   
        impares[0] = 1
            
        for(var i = 1; i < impares.length; i++){
            impares[i] = impares[i - 1] + 2;
        }

        const imparesVirgula = impares.join(", ")

    return(
        <div>
            <HeaderComponent/>
            <div className="ExAlign">                                    
                <ExNavBarComponent/>
                <section>
                    <h2>
                        Exercicio 02:
                    </h2>   
                    <p>
                        Declare um vetor de 10 posições e o preencha com os 10 primeiros números impares e o escreva..
                    </p>            
                    <br></br>
                    <p>
                        <span>Vetor de 10 posições = </span> {imparesVirgula} 
                    </p>                        
                </section>         
            </div>
        </div>    
    );
}

export default Exercicio02;