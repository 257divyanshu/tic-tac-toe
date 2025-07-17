import {FaTimes, FaRegCircle, FaPen} from "react-icons/fa"

function Icon({iconName}){
    if(iconName==="circle"){
        return <FaRegCircle/>
    }
    else if (iconName==="cross"){
        return <FaTimes/>
    }
    else{
        return <FaPen/>
    }
}

export default Icon;