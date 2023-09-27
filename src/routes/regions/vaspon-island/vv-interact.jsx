import {PlaceLocation} from "../components/place-location"
import Brunaulf from "../../../imgs/vaspon/brunaulf.png"

export const VVInteract = () => {
    return (
        <div className="place">
            <h1>Vaspon Village - Residents</h1>
            <div className="place-locations">
                <div></div>
                <PlaceLocation name="Brunaulf" img={Brunaulf}/>
                <div></div>
            </div>
        </div>
    );
}