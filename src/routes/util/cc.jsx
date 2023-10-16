import { useRef } from "react"
import { Player } from "../../objects/Player"
import leftArrow from "../../icons/left-arrow.png"
import rightArrow from "../../icons/right-arrow.png"
import char1 from "../../imgs/char/char1.png"
import char2 from "../../imgs/char/char2.png"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

export const Cc = () => {
    //variables
    let player = new Player();
    let preset = 0;
    const textPreset0 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam porro ea possimus eveniet perspiciatis, hic nisi accusamus tempora, quos quae fugiat eum dolor expedita aliquam blanditiis temporibus repellat ipsa!";
    const textPreset1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magnam porro ea possimus eveniet perspiciatis, hic nisi accusamus tempora, quos quae fugiat eum dolor expedita aliquam blanditiis temporibus repellat ipsa!";
    const refPreset0 = useRef(null);
    const refPreset1 = useRef(null);
    const navigate = useNavigate();

    //navigate
    function backward() {
        if (preset == 1){
            preset = 0;
            refPreset0.current.style.display = "flex";
            refPreset1.current.style.display = "none";
        }
    }
    function foward() {
        if(preset == 0){
            preset = 1;
            refPreset0.current.style.display = "none";
            refPreset1.current.style.display = "flex";
        }
    }

    //confirm function
    function confirmPreset(){
        Swal.fire({
            title: "Confirm",
            text: "Are you sure you want to create this character?",
            color: "white",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonText: "Yes",
        }).then((result) => {
            if(result.isConfirmed){
                player.selectPreset(preset);
                player.save(player);
                navigate("/house0");
            }
        })
    }

    //html
    return (
        <div className="cc">
            <div className="preset-main">
                <div className="preset-button" onClick={backward}><img src={leftArrow}></img></div>
                <div className="presets">
                    <Preset presetRef={refPreset0} name="Tadvan Autumnsteam" img={char1} age="23 yo" difficulty={"Normal"} title="The adventurer" text={textPreset0} func={confirmPreset}/>
                    <Preset presetRef={refPreset1} name="Meri Autumnsteam" img={char2} age="22 yo" difficulty={"Hard"} title="The adventurer girl" text={textPreset1} func={confirmPreset}/>
                </div>
                <div className="preset-button" onClick={foward}><img src={rightArrow}></img></div>
            </div>
        </div>
    )
}

// Preset component
const Preset = ({presetRef, name, img, age, difficulty, title, text, func}) => {
    let difficultyColor = "";
    function changeColor() {
        if (difficulty == "Easy"){
            difficultyColor = "green";
        } else if (difficulty == "Normal"){
            difficultyColor = "rgb(40, 40, 160)";
        } else if (difficulty == "Hard"){
            difficultyColor = "rgb(120, 40, 40)";
        }
    }
    changeColor();
    return (
        <div className="preset" ref={presetRef}>
            <div className="preset-left">
                <div className="preset-name"><h1>{name}</h1></div>
                <div className="preset-img"><img src={img}></img></div>
            </div>
            <div className="preset-right">
                <div className="preset-info">
                    <div className="preset-age"><h2>{age}</h2></div>
                    <div className="preset-difficulty"><h2 style={{color: difficultyColor}}>{difficulty}</h2></div>
                </div>
                <div className="preset-title"><h3>{title}</h3></div>
                <div className="preset-text">
                    <p>{text}</p>
                    <p>{text}</p>
                    <p>{text}</p>
                </div>
                <div className="preset-confirm"><p onClick={func}>Confirm</p></div>
            </div>
        </div>
    )
}