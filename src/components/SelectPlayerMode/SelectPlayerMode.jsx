function SelectPlayerMode({onModeSelect}){
    return ( 
        <div className="wrapper">
            <h1 className="themed-text">Choose Player Mode</h1>
            <button className="buttons themed-text" onClick={()=>onModeSelect('single')}>Single Player</button>
            <button className="buttons themed-text" onClick={()=>onModeSelect('multi')}>Multi Player</button>
        </div>
    )
}
export default SelectPlayerMode;