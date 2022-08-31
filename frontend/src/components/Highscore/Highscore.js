import "./Highscore.css"

function Highscore(){
    return( 
        <div className="highscore">
            <div>Você fez <b>50</b> pontos</div>
            <div>
                <h1>Highscore</h1>

                <div>Paulo - 90 pontos</div>
                <div>Paulo - 90 pontos</div>
                <div>Paulo - 90 pontos</div>
            </div>

            <div>
                <h1>Registre sua pontuação</h1>
                <form>
                    <input type="text" placeholder="Digite o seu nome..." />
                    <input type="submit" placeholder="Enviar"/>
                </form>
            </div>
        </div>
    );
}

export default Highscore;