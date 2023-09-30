import { useNavigate } from "react-router-dom";
import { Player } from "../../objects/Player"
import returnIcon from "../../icons/left-arrow.png"
import hpIcon from "../../icons/hp.png"
import manaIcon from "../../icons/mana.png"
import staIcon from "../../icons/sta.png"
import male from "../../icons/male.png"
import female from "../../icons/female.png"
import human from "../../icons/human.png"
import char1 from "../../imgs/char/char1.png";
import char2 from "../../imgs/char/char2.png";

export const Profile = () => {
    //load player
    let player = new Player();
    player.load();
    //vars
    const navigate = useNavigate();
    let gender = male;
    let race = human;
    let playerImg;
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
    function setImage () {
        if (player.preset == 0){
            playerImg = char1;
        } else if (player.preset == 1){
            playerImg = char2;
        }
    }
    setImage();
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
            <div className="profile-img"><img src={playerImg}></img></div>
            <div className="profile-resources">
                <img src={hpIcon}/>
                <p>{player.hp}/{player.maxHp}</p>
                <img src={manaIcon}/>
                <p>{player.mana}/{player.maxMana}</p>
                <img src={staIcon}/>
                <p>{player.sta}/{player.maxSta}</p>
            </div>
        </div>
        <div className="profile-right">
            <div className="profile-info">
                <div className="profile-info-box"><p>{player.age}</p></div>
                <div className="profile-info-box"><img src={gender}/></div>
                <div className="profile-info-box"><img src={race}/></div>
            </div>
            <div className="profile-stats">
                <div className="profile-stats-title"><h2>Stats</h2></div>
                <div className="profile-stats-list">
                    <div></div>
                    <div className="profile-stat">Strength: {player.str}</div>
                    <div className="profile-stat">Intelligence: {player.int}</div>
                    <div className="profile-stat">Charisma: {player.chr}</div>
                    <div className="profile-stat">Day: {player.day}</div>
                    <div className="profile-stat">Fishing: {player.fishing}</div>
                    <div className="profile-stat">Fishing: {player.fishing}</div>
                    <div className="profile-stat">Fishing: {player.fishing}</div>
                    <div className="profile-stat">Fishing: {player.fishing}</div>
                    <div><p></p></div>
                </div>
            </div>
        </div>
    </div>
    )
}