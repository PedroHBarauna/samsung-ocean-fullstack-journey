import { useState } from 'react';
import Highscore from '../Highscore/Highscore';
import Jogo from '../Jogo/Jogo';
import './App.css';

function App() {
  const [gameOver, setGameOver] = useState(false);

  function onDied(){
    setGameOver(true)
  }

  return (
    <div className="App">
      <Jogo onDied={onDied} />
      {gameOver && <Highscore/>}
    </div>
  );
}

export default App;
