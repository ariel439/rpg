import { useNavigate } from "react-router-dom";
import { Player } from "../../objects/Player"
import backIcon from "../../icons/return.png"
import money from "../../icons/money.png"
import weight from "../../icons/weight.png"

export const Inventory = () => {
    //load player
    let player = new Player();
    player.load();
    //vars
    const navigate = useNavigate();
    //functions
    function returnToHouse() {
        navigate(-1);
    }
    return (
        <div className="inventory">
            <div className="inventory-left">
                <div className="inventory-list-top">
                    <div className="inventory-return"><img src={backIcon} onClick={returnToHouse}/></div>
                    <h1>Bag</h1>
                </div>
                <div className="inventory-list"></div>
                <div className="inventory-info">
                    <div className="inventory-money"><img src={money}/> {player.money}</div>
                    <div className="inventory-weight"><img src={weight}/>{player.weight} / {player.maxWeight} kg</div>
                </div>
            </div>
            <div className="inventory-right"></div>
        </div>
    )
}