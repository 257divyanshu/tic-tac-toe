import Card from "../Card/Card";
import "./Grid.css";

function Grid({numberOfCards=9}) {
    return (
        <div className="grid">
            {/* {Array(numberOfCards).map(()=><Card/>)} */}
            {/* this didn't work */}
            {/* Array(numberOfCards) creates an array with empty slots, not undefined values that can be mapped over */}
            {/* we need .fill(null) or .fill(undefined) to populate the array slots so .map() can iterate over them */}
            {/* solution : */}
            {Array(numberOfCards).fill(null).map((elem,idx)=><Card key={idx}/>)}
        </div>
    )
}

export default Grid;