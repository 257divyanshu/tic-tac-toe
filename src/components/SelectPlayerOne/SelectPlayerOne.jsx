function SelectPlayerOne({ onPlayerOneSelect }){
    return ( 
        <div className="wrapper">
            <h1 className="themed-text">First Move?</h1>
            <button className="buttons themed-text" onClick={()=>onPlayerOneSelect('O')}>Me</button>
            <button className="buttons themed-text" onClick={()=>onPlayerOneSelect('X')}>Bot</button>
        </div>
    )
}
export default SelectPlayerOne;