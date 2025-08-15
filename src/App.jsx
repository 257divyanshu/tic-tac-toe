import './App.css'
import MultiPlayerGrid from "./components/Grid/MultiPlayerGrid";
import SelectPlayerMode from './components/SelectPlayerMode/SelectPlayerMode';
import { useState } from 'react';
import SelectPlayerOne from './components/SelectPlayerOne/SelectPlayerOne';
import SinglePlayerGrid from './components/Grid/SinglePlayerGrid';

function App() {
  let [mode, setMode] = useState("");
  function selectMode(val) {
    setMode(val);
  };
  let [playerOne, setPlayerOne] = useState("");
    function selectPlayerOne(val) {
        setPlayerOne(val);
    };
  return (
    <div className='app'>
      {!mode && !playerOne && <SelectPlayerMode onModeSelect={selectMode} />}
      {mode === "multi" && <MultiPlayerGrid />}
      {mode === "single" && !playerOne && <SelectPlayerOne onPlayerOneSelect={selectPlayerOne}/>}
      {mode === "single" && playerOne && <SinglePlayerGrid firstMove={playerOne}/>}
    </div>
  )
}

export default App
