import Icon from "../Icon/Icon";
import "./Card.css";

function Card({iconName}){
    return (
        <div className="card">
            <Icon iconName={iconName}/>
        </div>
    )
}

export default Card;