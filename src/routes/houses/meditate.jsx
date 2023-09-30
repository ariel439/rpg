import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "../../objects/Player"
import meditateImg from "../../icons/meditate.png"

export const Meditate = () => {
    //load player
    let player = new Player();
    player.load();
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
        player.save(player);
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