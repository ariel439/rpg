import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export const HouseGarden = ({img}) => {
    //vars
    const navigate = useNavigate();
    let loc = useLocation();
    //functions 
    function exitHouse() {
        if (loc.pathname  == "/house0" ){ 
            navigate("/vaspon-village");
        }
    }
    return (
    <div className="house-room">
        <div className="house-room-info" style={{backgroundImage: `url(${img})`}}><h1>Garden</h1></div>
        <div className ="house-room-options">
            <div className="house-room-option" onClick={exitHouse}><h2>Exit</h2></div>
        </div>
    </div>
    )
}