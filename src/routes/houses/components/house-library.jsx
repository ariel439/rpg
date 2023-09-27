import { useNavigate } from "react-router-dom";

export const HouseLibrary = ({img}) => {
    //vars
    const navigate = useNavigate();
    //functions
    function openProfile () {
        navigate("/profile");
    }
    function openQuests () {
        navigate("/quest-log");
    }
    //html
    return (
    <div className="house-room">
        <div className="house-room-info" style={{backgroundImage: `url(${img})`}}><h1>Library</h1></div>
        <div className ="house-room-options">
            <div className="house-room-option" onClick={openProfile}><h2>Profile</h2></div>
            <div className="house-room-option" onClick={openQuests}><h2>Quests</h2></div>
            <div className="house-room-option"><h2>Books</h2></div>
            <div className="house-room-option"><h2>Save</h2></div>
            <div className="house-room-option"><h2>Load</h2></div>
        </div>
    </div>
    )
}