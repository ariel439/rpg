import { PlaceOption } from "../components/place-option"
import village from "../../../imgs/vaspon/village.png"
import forest from "../../../imgs/vaspon/forest.png"


export const Vaspon = () => {
    return (
        <div className="place">
            <div className="place-title"><h1>Vaspon Island</h1></div>
            <div className="place-options">
                <PlaceOption name="Village" img={village} loc="/vaspon-village"/>
                <PlaceOption name="Forest" img={forest} loc="/forest"/>
            </div>
        </div>
    )
}