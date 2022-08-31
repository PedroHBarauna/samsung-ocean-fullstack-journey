import "./Jogo.css"
import clouds from "../../assets/clouds.png"
import mario from "../../assets/mario.gif"
import cano from "../../assets/pipe.png"
import gameOver from "../../assets/game-over.png"
import { useEffect, useRef, useState } from "react"

function Jogo() {

    const [estaPulando, setEstaPulando] = useState(false);
    const [estaMorto, setEstaMorto] = useState(false);
    const [pontos, setPontos] = useState(0);

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
        const estaNoCano = marioEstaNoCano();

        if(!estaNoCano){
            return;
        }

        //console.log("Mario está no cano?", valor);
        setEstaMorto(true);
    }, 100);

    useEffect(function(){  
        
        const interval = setInterval(function () {
        if(estaMorto){
            return;
        }

        setPontos(pontos + 1);

        }, 500);
        
        return () => clearInterval(interval);
    }, [estaMorto, pontos]);



    document.onkeydown = function(){
        setEstaPulando(true);

        setTimeout(function(){
            setEstaPulando(false);
        }, 700);
    };

    let marioClassName = "mario"

    if(estaPulando){
        marioClassName = "mario mario-pulo";
    }

    const marioImage = estaMorto ? gameOver : mario;
    const pararAnimacao = estaMorto ? "parar-animacao" : "";

    return (
    <div className="jogo">
        <img className={"nuvens " + pararAnimacao}  src={clouds}  alt="Nuvens"></img>

        <img 
            ref={marioRef} 
            className={marioClassName} 
            src={marioImage} 
            alt="Mario"
        />
        <img 
            ref={canoRef} 
            className={"cano " + pararAnimacao} 
            src={cano} 
            alt="Cano"
        />

        <div className="chao"></div>
    </div>      
    );
}

export default Jogo;