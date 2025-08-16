import Button from "../Button/Button";
function SelectPlayerMode({ onModeSelect }) {
    return (
        <div className="wrapper">
            <h1 className="themed-text">Choose Player Mode</h1>
            <Button onClick={() => onModeSelect('single')}>Single Player</Button>
            <Button onClick={() => onModeSelect('multi')}>Multi Player</Button>
        </div>
    )
}
export default SelectPlayerMode;