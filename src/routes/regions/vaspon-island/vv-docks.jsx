import { useNavigate } from "react-router-dom";
import { PlaceOption } from "../components/place-option"
import backIcon from "../../../icons/return.png"
import joshua from "../../../imgs/vaspon/joshua.png"
import boat from "../../../imgs/vaspon/v-boat.png"
import { Joshua } from "../../../objects/npcs";

export const VasponVillageDocks = () => {
    //vars
    const navigate = useNavigate();
    const joshuaObj = new Joshua();
    //functions
    function goBack() {
        navigate("/vaspon-village");
    }
    return (
        <div className="place">
            <div className="place-title"><img src={backIcon} onClick={goBack}/><h1>Docks</h1><div></div></div>
            <div className="place-options">
                <PlaceOption name="Joshua" img={joshua} loc="/dialogue" npc={joshuaObj}/>
                <PlaceOption name="Boat" img={boat}/>
            </div>
        </div>
    )
}