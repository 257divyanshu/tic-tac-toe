import Icon from "../Icon/Icon";
import "./Card.css";

function Card({onPlay, player, index}){

    // console.log('card re-rendered');

    let icon = <Icon/>;

    if(player=="X"){
        icon = <Icon iconName={'cross'}/>;
    }
    else if(player=="O"){
        icon = <Icon iconName={'circle'}/>;
    }

    return (
        <div className="card" onClick={()=>{
            player==="" && onPlay(index);
            // onPlay(index);
        }}>
            {icon}
        </div>
    )

}

export default Card;