import Icon from "../Icon/Icon";
import "./Card.css";

function Card({iconName, onCardClick}){
    return (
        <div className="card" onClick={onCardClick}>
            <Icon iconName={iconName}/>
        </div>
    )
}

export default Card;