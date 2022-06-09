import { useState } from "react";
import Button from "./Button";
import "./Perfil.css"

function Perfil({nome, foto, idade}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0);


    function aumentarVisualizacoes(){
        setNumeroVisualizacoes(numeroVisualizacoes+1)

    }

    return(
        <div className="card">
            <p>01/06/2022</p>
            <p>NOTA À COMUNIDADE</p>
            <p>Bloqueio do orçamento da educação</p>
        </div>
    );
}
export default Perfil;