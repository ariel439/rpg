import Swal from "sweetalert2";
import { Player } from "../../../objects/Player";
import leftArrow from "../../../icons/left-arrow.png"
import rightArrow from "../../../icons/right-arrow.png"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dialogue = () => {
    const [texts,setTexts] = useState([]);
    //load player
    let player = new Player();
    player.load();
    //functions
    //this functing will check if the npc is already on the player diary, then will fire hello if true or will save it in the diary and fire introduction.
    function checkIfKnown(){
        let check = false;
        player.contacts.forEach(contact => {
            if(contact.id == player.interacting.id) {
                check = true;
                hello();
            }
        })
        if(check == false) {
            player.meetPerson(player.interacting);
            player.save(player);
            Swal.fire({
                title: player.interacting.name + " added to diary!",
                imageUrl: player.interacting.img,
                color: "rgb(255,255,255)",
            })
            introduction()
        }
    }
    //This will fire from checkIfKnow if the player already know who is the npc it will set dialogues on the screen depending on the npc societyClass and relations in future.
    function hello() {
        useEffect(()=>{
            if(player.interacting.societyClass == "Worker"){
                setTexts([
                    ...texts,
                    { 
                        text: "Hello " + player.interacting.name + ", how are you?",
                        type: 1,
                    },{
                        text: "Hello " + player.name + ", i'm alright. Thanks for asking!",
                        type: 2 ,
                    }
                ]);
            } else if(player.interacting.societyClass == "Royalty"){
                setTexts([
                    ...texts,
                    { 
                        text: "Hello " + player.interacting.name + ", how are you?",
                        type: 1,
                    },{
                        text: "Greetings " + player.name + "... I'm having an interesting day so far...",
                        type: 2 ,
                    }
                ]);
            }
        }, [])
    }
    //this will fire from check if known and introduct both characters.
    function introduction() {
        useEffect(()=>{
            setTexts([
                ...texts,
                { 
                    text: "Hello my name is " + player.name + ", can you tell me more about you?",
                    type: 1,
                },{
                    text: "Hello " + player.name + ". My name is  " + player.interacting.name + ", " + player.interacting.description,
                    type: 2 ,
                }
            ]);
        }, [])
    }
    checkIfKnown();
    return (
        <div className="dialogue">
            <div className="dialogue-boxes">
                {texts.map((t, i) => {
                    if (t.type == 2)
                        return(<NpcDialogue key={i} img={player.interacting.img} text={t.text}/>)
                    else 
                        return(<PlayerDialogue key={i} img={player.img} text={t.text}/>)
                })}
                <div></div>
            </div>
            <DialogueOptions t={texts} st={setTexts}/>
        </div>
    )
}

//components
const PlayerDialogue = ({img, text}) => {
    return (
        <div className="player-dialogue-box">
            <img className="player-dialogue-image" src={img}></img>
            <div className="player-dialogue-text"><h1>{text}</h1></div>
        </div>
    )
}

const NpcDialogue= ({img, text}) => {
    return (
        <div className="npc-dialogue-box">
            <div className="npc-dialogue-text"><h1>{text}</h1></div>
            <img className="npc-dialogue-image" src={img}></img>
        </div>
    )
}

//Dialogue component
const DialogueOptions = ({t, st}) => {
    //vars
    const refTalk = useRef(null);
    const refAsk = useRef(null);
    const refFlirt = useRef(null);
    const refLeave = useRef(null);
    const navigate = useNavigate();
    let count = 1;
    //functions
    function leave () {
        navigate(-1);
    }
    function change() {
        refTalk.current.style.display = "none";
        refAsk.current.style.display = "none";
        refFlirt.current.style.display = "none";
        refLeave.current.style.display = "none";
        switch(count){
            case 1:
                refTalk.current.style.display = "flex";
                break;
            case 2:
                refAsk.current.style.display = "flex";
                break;
            case 3:
                refFlirt.current.style.display = "flex";
                break;
            case 4:
                refLeave.current.style.display = "flex";
                break;
        }
    }
    //right
    function right () {
        if (count < 4){
            count+=1;
            change();
        }
    }
    function left () {
        if (count > 1){
            count-=1;
            change();
        }
    }
    function getIndex() {
        //load player
        let player = new Player();
        player.load();
        let index = 0;
        for (let i = 0; i < player.contacts.length; i++) {
            if (player.contacts.id == player.interacting.id){
                index = i;
            }
        }
        return index;
    }
    
    function talkNpc(t, st){
        st([
            ...t,
            { 
                text: "",
                type: 1,
            },{
                text: "",
                type: 2 ,
            }
        ]);
    }
    return (
        <div className="dialogue-option-box">
            <div className="dialogue-option-left" onClick={left}> <img src={leftArrow}/></div>
            <div className="dialogue-options">
                <div ref={refTalk} className="dialogue-option" onClick={() => talkNpc(t, st)}><h1>Talk</h1></div>
                <div ref={refAsk} className="dialogue-option"><h1>Ask</h1></div>
                <div ref={refFlirt} className="dialogue-option"><h1>Flirt</h1></div>
                <div  ref={refLeave} className="dialogue-option"><h1 onClick={leave}>Leave</h1></div>
            </div>
            <div className="dialogue-option-right" onClick={right}> <img src={rightArrow}/></div>
        </div>
    )
}