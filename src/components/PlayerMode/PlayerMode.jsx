import "./playerMode.css";
function PlayerMode({onModeSelect}){
    return (
        <div className="mode-wrapper">
            <h1 className="themed-text">Choose Player Mode</h1>
            <h1 className="mode-buttons themed-text" onClick={()=>onModeSelect('single')}>Single Player</h1>
            <h1 className="mode-buttons themed-text" onClick={()=>onModeSelect('multi')}>Multi Player</h1>
        </div>
    )
}
export default PlayerMode;