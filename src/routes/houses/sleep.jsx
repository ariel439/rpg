import { useNavigate } from "react-router-dom";
import { Player } from "../../objects/Player";

export const Sleep = () => {
    //load player
    let player = new Player();
    player.load();
    //vars
    const navigate = useNavigate();
    //functions
    function sleepContinue () {
        player.sleep();
        player.save(player);
        navigate(-1);
    }
    //html
    return (
    <div className="sleep">
        <div className="sleep-letters">
            <h1 className="sleep-z1">Z</h1>
            <h1 className="sleep-z2">Z</h1>
            <h1 className="sleep-z3">Z</h1>
        </div>
        <div className="sleep-continue" onClick={sleepContinue}>Continue</div>
    </div>
    )
}