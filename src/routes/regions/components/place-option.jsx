import { useNavigate } from "react-router-dom";
import { Player } from "../../../objects/Player";

export const PlaceOption = ({name,img,loc, npc}) => {
    //load player
    let player = new Player();
    player.load();
    //vars
    const navigate = useNavigate();
    //functions
    function goToPlace () {
        player.interacting = npc;
        player.save(player);
        navigate(loc);
    }
    //html
    return (
        <div className="place-option">
            <img src={img} onClick={goToPlace}></img>
            <h2>{name}</h2>
        </div>
    )
}