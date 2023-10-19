import { useNavigate } from "react-router-dom";
import { PlaceOption } from "../components/place-option"
import backIcon from "../../../icons/return.png"
import eryn from "../../../imgs/vaspon/eryn.png"
import negotiate from "../../../imgs/vaspon/negotiate.png"

export const VasponVillageShop = () => {
    //vars
    const navigate = useNavigate();
    //functions
    function goBack() {
        navigate("/vaspon-village");
    }
    return (
        <div className="place">
            <div className="place-title"><img src={backIcon} onClick={goBack}/><h1>V.V. Shop</h1><div></div></div>
            <div className="place-options">
                <PlaceOption name="Eryn" img={eryn}/>
                <PlaceOption name="Negotiate" img={negotiate}/>
            </div>
        </div>
    )
}