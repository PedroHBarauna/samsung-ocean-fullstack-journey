import "./Jogo.css"
import clouds from "../../assets/clouds.png"

function Jogo(){
    return <div className="jogo">
        <img className="nuvens" src={clouds}  alt="Nuvens"></img>
    </div>
}

export default Jogo;