import './App.css'
import SinglePlayerGrid from "./components/Grid/SinglePlayerGrid";
import MultiPlyaerGrid from "./components/Grid/MultiPlayerGrid";
import PlayerMode from './components/PlayerMode/PlayerMode';
import { useState } from 'react';

function App() {
  let [mode, setMode] = useState("");
  function selectMode(val){
    setMode(val);
  };
  return (
    <div className='app'>
      {!mode && <PlayerMode onModeSelect={selectMode}/>}
      {mode==="single" && <SinglePlayerGrid/>}
      {mode==="multi" && <MultiPlyaerGrid/>}
    </div>
  )
}

export default App
