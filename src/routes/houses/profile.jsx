import { useNavigate } from "react-router-dom";
import { Player } from "../../objects/Player"
import returnIcon from "../../icons/left-arrow.png"
import hpIcon from "../../icons/hp.png"
import manaIcon from "../../icons/mana.png"
import staIcon from "../../icons/sta.png"
import male from "../../icons/male.png"
import female from "../../icons/female.png"
import human from "../../icons/human.png"

export const Profile = () => {
    //load player
    let player = new Player();
    player.load();
    console.clear();
    console.log(player);
    //vars
    const navigate = useNavigate();
    let gender = male;
    let race = human;
    //functions
    function back() {
        navigate(-1);
    }
    function selectGender () {
        if (player.gender == "M") {
            gender = male;
        } else if (player.gender == "F"){
            gender = female;
        }
    }
    function selectRace () {
        if (player.race == "Human") {
            race = human;
        }
    }

    selectGender();
    selectRace();
    //html
    return (
    <div className="profile">
        <div className="profile-left">
            <div className="profile-name">
                <div className="profile-return"><img src={returnIcon} onClick={back}/></div>
                <div className="profile-name-text"><h1>{player.name} {player.surname}</h1></div>
            </div>
            <div className="profile-img"><img src={player.img}/></div>
            <div className="profile-resources">
                <img src={hpIcon}/>
                <p>{player.hp}/{player.maxHp}</p>
                {(() => {
                    if (player.quests[0].step == 99) {
                        return <ManaTab mana={player.mana} maxMana={player.maxMana}/>;
                    }
                })()}
                <img src={staIcon}/>
                <p>{player.sta}/{player.maxSta}</p>
            </div>
        </div>
        <div className="profile-right">
            <div className="profile-info">
                <div className="profile-info-box"><p>{player.age}</p></div>
                <div className="profile-info-box"><img src={gender}/></div>
                <div className="profile-info-box"><img src={race}/></div>
                <div className="profile-info-box"><p>PH</p></div>
            </div>
            <div className="profile-stats">
                <div className="profile-stats-date"><h2>{player.getweekday()}, {player.day}/{player.month}/{player.year}</h2></div>
                <div className="profile-stats-list">
                    <div></div>
                    <div className="profile-stat">Strength: {player.str}</div>
                    <div className="profile-stat">Intelligence: {player.int}</div>
                    <div className="profile-stat">Charisma: {player.chr}</div>
                    <div className="profile-stat">Fishing: {player.fishing}</div>
                    <div className="profile-stat">Min Damage: {player.minDamage}</div>
                    <div className="profile-stat">Max Damage: {player.maxDamage}</div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    )
}

const ManaTab = ({mana, maxMana}) => {
    return(
        <>
            <img src={manaIcon}/>
            <p>{mana}/{maxMana}</p>
        </>
    )
}