import { useState } from 'react';
import Highscore from '../Highscore/Highscore';
import Jogo from '../Jogo/Jogo';
import './App.css';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [pontos, setPontos] = useState(0);

  function onDied(){
    setGameOver(true)
  }

  function onPontos(novosPontos){
    setPontos(novosPontos)
  }

  return (
    <div className="App">
      <Jogo onDied={onDied} onPontos={onPontos}/>
      {gameOver && <Highscore pontos = {pontos}/>}
    </div>
  );
}

export default App;
