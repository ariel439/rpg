import { PlaceOption } from "../components/place-option"
import vHouse from "../../../imgs/vaspon/v-house.png"
import vCastle from "../../../imgs/vaspon/v-castle.png"
import vShop from "../../../imgs/vaspon/v-shop.png"
import vDocks from "../../../imgs/vaspon/v-docks.png"
import { Player } from "../../../objects/Player"
import map from "../../../icons/map.png"
import { useNavigate } from "react-router-dom"

export const VasponVillage = () => {
    //load player
    let player = new Player();
    player.load();
    //vars
    const navigate = useNavigate();
    //functions
    function goToIsland () {
        navigate("/vaspon")
    }
    return (
        <div className="place">
            <div className="place-title"><div/><h1>Vaspon Village</h1><img src={map} onClick={goToIsland}/></div>
            <div className="place-options">
                <div></div>
                {player.houses[0].owned == true ? <PlaceOption name="House" img={vHouse} loc="/house0"/>: null} 
                <PlaceOption name="Castle" img={vCastle}/>
                <PlaceOption name="Shop" img={vShop}/>
                <PlaceOption name="Docks" img={vDocks}/>
                <div></div>
            </div>
        </div>
    );
}