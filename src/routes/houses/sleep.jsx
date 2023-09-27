import { useNavigate } from "react-router-dom";

export const Sleep = () => {
    //vars
    const navigate = useNavigate();
    //functions
    function sleepContinue () {
        player.sleep();
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