const quests = [
    {
        id: 0,
        step1: `Meditation is practiced everywhere in this world, you meditated for the first time and one day can start to harvest the fruits of it.`
    },
]

export function getQuestDesc(index,step) {
    if (step == 1){
        return quests[index].step1;
    }
}