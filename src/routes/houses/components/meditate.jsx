import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import meditateImg from "../../../icons/meditate.png"

export const Meditate = () => {
    //vars
    const navigate = useNavigate();
    //functions
    useEffect(() => {
        const meditateTimeout = setTimeout(() => {
            player.meditate();
        }, 10000);

        return() => {
            clearTimeout(meditateTimeout);
        }
    })
    function meditateContinue () {
        navigate(-1);
    }
    //html
    return (
    <div className="meditate">
        <img src={meditateImg}/>
        <div className="meditate-continue" onClick={meditateContinue}>Continue</div>
    </div>
    )
}