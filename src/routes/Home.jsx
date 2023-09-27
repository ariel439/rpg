import {Link} from "react-router-dom"

export const Home = () => {
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