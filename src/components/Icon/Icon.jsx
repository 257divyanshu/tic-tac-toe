import "./icon.css";

function Icon({iconName}){
    console.log('Icon rendered')
    if(iconName==="circle"){
        return <div className="icons" style={{
            borderColor: "#f08080"
        }}>
            <svg 
                className="o-icon"
                viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="35" strokeWidth="12" fill="none" />
            </svg>
        </div>
    }
    else if (iconName==="cross"){
        return <div className="icons" style={{
            borderColor: "#6ca9f0"
        }}>
            <svg 
                className="x-icon"
                viewBox="0 0 100 100">
                <line x1="20" y1="20" x2="80" y2="80" strokeWidth="15" strokeLinecap="round" />
                <line x1="80" y1="20" x2="20" y2="80" strokeWidth="15" strokeLinecap="round" />
            </svg>
        </div>
    }
    else{
        return <div className="icons"></div>
    }
}

export default Icon;