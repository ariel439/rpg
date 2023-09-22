import "./style.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./routes/Home"
import { Cc } from "./routes/Cc"
import { Credits } from "./routes/Credits"
import { House0 } from "./routes/houses/house0"
import { Profile } from "./routes/houses/profile"

export default function App(){
  return (
    <Router basename="rpg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cc" element={<Cc/>}/>
        <Route path="/house0" element={<House0/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/credits" element={<Credits/>}/>
      </Routes>
    </Router>
  );
}
