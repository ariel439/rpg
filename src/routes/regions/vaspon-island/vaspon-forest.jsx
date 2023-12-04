import { PlaceOption } from "../components/place-option"
import explore from "../../../imgs/vaspon/explore.png"
import exploreF from "../../../imgs/vaspon/explore-f.png"
import fish from "../../../imgs/vaspon/fishing.png"
import fishF from "../../../imgs/vaspon/fishing-f.png"
import gather from "../../../imgs/vaspon/gathering.png"
import gatherF from "../../../imgs/vaspon/gathering-f.png"
import map from "../../../icons/map.png"
import { useNavigate } from "react-router-dom";
import { Player } from "../../../objects/Player"

export const VasponForest = () => {
    //load player
    let player = new Player();
    player.load();
    const navigate = useNavigate();
    //img vars
    let exploreImg,fishImg,gatherImg;
    //functions
    function goToIsland () {
        navigate("/vaspon")
    }
    function setImages() {
        if(player.gender == "M"){
            exploreImg = explore;
            fishImg = fish;
            gatherImg = gather;
        } else {
            exploreImg = exploreF;
            fishImg = fishF;
            gatherImg = gatherF;
        }
    }
    setImages();
    return (
        <div className="place">
            <div className="place-title"><div/><h1>Forest</h1><img src={map} onClick={goToIsland}/></div>
            <div className="place-options">
                <div></div>
                <PlaceOption name="Explore" img={exploreImg}/>
                <PlaceOption name="Fish" img={fishImg}/>
                <PlaceOption name="Gather" img={gatherImg}/>
                <div></div>
            </div>
        </div>
    );
}