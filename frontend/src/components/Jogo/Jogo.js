import "./Jogo.css"
import clouds from "../../assets/clouds.png"
import mario from "../../assets/mario.gif"
import cano from "../../assets/pipe.png"
import { useRef, useState } from "react"

function Jogo() {

    const [estaPulando, setEstaPulando] = useState(false);

    const marioRef = useRef();
    const canoRef = useRef();

    function marioEstaNoCano(){
        const mario = marioRef.current;
        const cano = canoRef.current;

        if(!mario || !cano){
            return;
        }

        return (
            cano.offsetLeft > mario.offsetLeft &&
            cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
            mario.offsetTop + mario.offsetHeight > cano.offsetTop       
        );
    }

    setInterval(function(){
        const valor = marioEstaNoCano();

        console.log("Mario está no cano?", valor);
    }, 100);


    document.onkeydown = function(){
        setEstaPulando(true);

        setTimeout(function(){
            setEstaPulando(false);
        }, 700);
    };

    let marioClassName = "mario";

    if(estaPulando){
        marioClassName = "mario mario-pulo";
    }

    return (
    <div className="jogo">
        <img className="nuvens" src={clouds}  alt="Nuvens"></img>
        <img ref={marioRef} className={marioClassName} src={mario} alt="Mario"></img>
        <img ref={canoRef} className="cano" src={cano} alt="Cano"></img>
        <div className="chao"></div>
    </div>      
    );
}

export default Jogo;