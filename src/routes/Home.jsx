import {Link} from "react-router-dom"

export const Home = () => {

  //create player
  let player = {
    preset: 0,
    img: "",
    name: "",
    surname: "",
    race: "",
    gender: "",
    age: 0,
    level: 1,
    xp: 0,
    str: 10,
    int: 10,
    chr: 10,
    baseHp: 10,
    hp: 100,
    maxHp: 100,
    baseMana: 0,
    mana: 0,
    maxMana: 0,
    baseSta: 10,
    sta: 100,
    maxSta: 100,
    fishing: 1,
    fishingXp: 0,
    fishintoToLevel: 100,
    houses: [
      {
        id: 0,
        owned: false,
      }
    ],
  }

  //store in player
  localStorage.setItem('player',JSON.stringify(player))

  //main menu
  return (
    <div className="home">
        <div className="home-title"><h1>RPG Qualquer</h1></div>
        <div className="home-options">
          <Link to="/cc">Start</Link>
          <Link to="/load">Load</Link>
          <Link to="/credits">Credits</Link>
        </div>
    </div>
  )
}