import "./Highscore.css"

function Highscore(props){

    fetch("http://localhost:3333/pontuacoes").then(console.log)

    return( 
        <div className="highscore">
            <div>Você fez <b>{props.pontos}</b> pontos</div>
            <div>
                <h1>Highscore</h1>

                <div>Paulo - 90 pontos</div>
                <div>Paulo - 90 pontos</div>
                <div>Paulo - 90 pontos</div>
            </div>

            <div>
                <h1>Registre sua pontuação</h1>
                <form>
                    <input type="text" pattern="^[0-9]*$" placeholder="Digite o seu nome..." />
                    <input type="submit" placeholder="Enviar"/>
                </form>
            </div>
        </div>
    );
}

export default Highscore;