import { useNavigate } from "react-router-dom";

export const PlaceOption = ({name,img,loc}) => {
    //vars
    const navigate = useNavigate();
    //functions
    function openSleep () {
        navigate(loc);
    }
    //html
    return (
        <div className="place-option">
            <img src={img} onClick={openSleep}></img>
            <h2>{name}</h2>
        </div>
    )
}