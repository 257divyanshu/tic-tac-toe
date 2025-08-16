import Button from "../Button/Button";

function SelectPlayerOne({ onPlayerOneSelect }){
    return ( 
        <div className="wrapper">
            <h1 className="themed-text">First Move?</h1>
            <Button className="buttons themed-text" onClick={()=>onPlayerOneSelect('O')}>Me</Button>
            <Button className="buttons themed-text" onClick={()=>onPlayerOneSelect('X')}>Bot</Button>
        </div>
    )
}
export default SelectPlayerOne;