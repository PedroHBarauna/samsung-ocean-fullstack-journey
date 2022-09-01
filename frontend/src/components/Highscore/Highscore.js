import { useEffect, useState } from "react";
import "./Highscore.css"

function Highscore(props){

    const [itens, setItens] = useState(undefined);

    useEffect(function(){

        async function carregarPontuacoes(){
            const response = await fetch("http://localhost:3333/pontuacoes");
            const body = await response.json();

            setItens(body);
        }
        
        carregarPontuacoes();
    }, []);

    const itensEstaoCarregando = itens === undefined;

    async function salvarPontuacoes(event){
        const form =event.target;
        const name = form.name.value;

        const response = await fetch("http://localhost:3333/pontuacoes", {
            method: "POST",
            body: JSON.stringify({name:name, pontos: props.pontos}),
            headers:{
                "Content-type": "application/json",
            },
        });

        const body = await response.json();
        
        console.log("Pontuação salva:", body)
    }

    return( 
        <div className="highscore">
            <div>Você fez <b>{props.pontos}</b> pontos</div>
            <div>
                <h1>Highscore</h1>

                {itensEstaoCarregando ? (
                    <div>Carregando...</div>
                ) : (
                    <div>  
                    {itens.map((item, index)=>(
                        <div key={`score_${index}`}>
                            {item.name} - {item.pontos}
                        </div>
                    ))}
                    </div>
                )}

            </div>

            <div>
                <h1>Registre sua pontuação</h1>
                <form onSubmit={salvarPontuacoes}>
                    <input type="text" name="name" placeholder="Digite o seu nome..." />
                    <input type="submit" placeholder="Enviar"/>
                </form>
            </div>
        </div>
    );
}

export default Highscore;