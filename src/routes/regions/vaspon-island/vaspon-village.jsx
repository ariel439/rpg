import {PlaceLocation} from "../components/place-location"
import vHouse from "../../../imgs/vaspon/v-house.png"
import vShop from "../../../imgs/vaspon/v-shop.png"
import vInteract from "../../../imgs/vaspon/v-interact.png"
import vDocks from "../../../imgs/vaspon/v-docks.png"

export const VasponVillage = () => {
    return (
        <div className="place">
            <h1>Vaspon Village</h1>
            <div className="place-locations">
                <div></div>
                <PlaceLocation name="House" img={vHouse} loc="/house0"/>
                <PlaceLocation name="Interact" img={vInteract} loc="/vv-interact"/>
                <PlaceLocation name="Shop" img={vShop}/>
                <PlaceLocation name="Docks" img={vDocks}/>
                <div></div>
            </div>
        </div>
    );
}