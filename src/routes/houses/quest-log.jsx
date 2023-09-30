import { useNavigate } from "react-router-dom";
import { useState } from "react";
import backIcon from "../../icons/left-arrow.png"
import { Player } from "../../objects/Player"
import { getQuestDesc } from "../../text/quest-desc";

export const QuestLog = () => {
    //load player
    let player = new Player();
    player.load();
    //vars
    const navigate = useNavigate();
    let questsToDisplay = [];
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    //functions
    function returnToHouse() {
        navigate(-1);
    }
    function createlist() {
        player.quests.forEach(quest => {
            if (quest.step != 0){
                questsToDisplay.push(quest);
            }
        });
    }
    function showQuest(id) {
        setTitle(player.quests[id].title);
        const desc = getQuestDesc(id, player.quests[id].step)
        setDesc(desc);
    }
    createlist();
    //html
    return (
    <div className="quests">
        <div className="quests-left">
            <div className="quest-list-top">
                <div className="quests-return"><img src={backIcon} onClick={returnToHouse}/></div>
                <h1>Quests</h1>
            </div>
            <div className="quest-list">
                {questsToDisplay.map((quest) => (
                    <h2 key={quest.id} onClick={() => showQuest(quest.id)} >{quest.title}</h2>
                ))}
            </div>
        </div>
        <div className="quests-right">
            <h1 className="quest-title">{title}</h1>
            <div className="quest-desc"><p>{desc}</p></div>
        </div>
    </div>
    )
}