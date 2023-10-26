import React from "react";
import ExNavBarComponent from "../../ex-nav-bar";
import HeaderComponent from "../../header";

const Exercicio01 = () => { 
         
    const numeros = new Array(12);
        numeros[0] = 2;
        numeros[1] = 4;
        numeros[2] = 5;
        numeros[3] = 10;
        numeros[4] = 29;
        numeros[5] = 22;
        numeros[6] = 44;
        numeros[7] = 88;
        numeros[8] = 91;
        numeros[9] = 182;
        numeros[10] = 364;
        numeros[11] = 368;
    const virgulaValores = numeros.join(', ')
    const x = numeros[7];        
    const y = numeros[3];
    const result = x + y;     
    
    return(
        <div>
            <HeaderComponent/>
            <div className="ExAlign">                                    
                <ExNavBarComponent/>
                <section>
                    <h2>
                        Exercicio 01:
                    </h2>   
                    <p>
                        Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer correspondentes a duas posições no vetor. 
                        Ao final seu programa deverá escrever a soma 
                        dos valores encontrados nas respectivas posições X e Y.
                    </p>            
                    <br></br>
                    <p>
                        <span>Vetor de 12 posições = </span>{virgulaValores}
                    </p>   
                    <p>
                        <span>X = </span>{x}
                    </p>   
                    <p>
                        <span>Y = </span>{y}
                    </p>   
                    <p>
                        <span>Soma dos valores = </span>{result}
                    </p>   
                </section>         
            </div>
        </div>    
    )
  };

export default Exercicio01;
