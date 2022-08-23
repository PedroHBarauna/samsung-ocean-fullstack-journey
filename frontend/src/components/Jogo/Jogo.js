import "./Jogo.css"
import clouds from "../../assets/clouds.png"
import mario from "../../assets/mario.gif"
import cano from "../../assets/pipe.png"
import { useState } from "react"

function Jogo() {
    console.log("Componente de Jogo Renderizado");

    const [estaPulando, setEstaPulando] = useState(false);

    document.onkeydown = function(){
        console.log("On Key Down")

        setEstaPulando(true);
    }

    console.log(18, { estaPulando });

    return (
    <div className="jogo">
        <img className="nuvens" src={clouds}  alt="Nuvens"></img>
        <img className="mario" src={mario} alt="Mario"></img>
        <img className="cano" src={cano} alt="Cano"></img>
        <div className="chao"></div>
    </div>      
    );
}

export default Jogo;