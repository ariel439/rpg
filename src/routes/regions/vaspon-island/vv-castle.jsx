import { useNavigate } from "react-router-dom";
import { PlaceOption } from "../components/place-option"
import backIcon from "../../../icons/return.png"
import brunaulf from "../../../imgs/vaspon/brunaulf.png"
import { Brunaulf } from "../../../objects/npcs";

export const VasponVillageCastle = () => {
    //vars
    const navigate = useNavigate();
    const brunaulfObj = new Brunaulf();
    //functions
    function goBack() {
        navigate("/vaspon-village");
    }
    return (
        <div className="place">
            <div className="place-title"><img src={backIcon} onClick={goBack}/><h1>Castle</h1><div></div></div>
            <div className="place-options">
                <PlaceOption name="Brunaulf" img={brunaulf} loc="/dialogue" npc={brunaulfObj}/>
            </div>
        </div>
    )
}