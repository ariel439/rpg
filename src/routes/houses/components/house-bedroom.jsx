import { useNavigate } from "react-router-dom";

export const HouseBedroom = ({img}) => {
    //vars
    const navigate = useNavigate();
    //functions
    function openSleep () {
        navigate("/sleep");
    }
    function openMeditate() {
        navigate("/meditate");
    }
    function openInventory() {
        navigate("/inventory");
    }
    //html
    return (
    <div className="house-room">
        <div className="house-room-info" style={{backgroundImage: `url(${img})`}}><h1>Bedroom</h1></div>
        <div className ="house-room-options">
            <div className="house-room-option" onClick={openInventory}><h2>Bag</h2></div>
            <div className="house-room-option" onClick={openMeditate}><h2>Meditate</h2></div>
            <div className="house-room-option" onClick={openSleep}><h2>Sleep</h2></div>
        </div>
    </div>
    )
}