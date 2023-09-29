const quests = [
    {
        id: 0,
        step1: `Meditation is practiced everywhere in this world, you meditated for the first time...`
    },
]

export function getQuestDesc(index,step) {
    if (step == 1){
        return quests[index].step1;
    }
}