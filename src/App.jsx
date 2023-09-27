import "./style.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./routes/Home"
import { Cc } from "./routes/util/cc"
import { Credits } from "./routes/util/credits"
import { House0 } from "./routes/houses/house0"
import { Profile } from "./routes/houses/profile"
import { Sleep } from "./routes/houses/sleep"
import { VasponVillage } from "./routes/regions/vaspon-island/vaspon-village"
import { QuestLog } from "./routes/houses/quest-log"
import { Meditate } from "./routes/houses/components/meditate"
import { VVInteract } from "./routes/regions/vaspon-island/vv-interact"

export default function App(){
  return (
    <Router basename="rpg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cc" element={<Cc/>}/>
        <Route path="/house0" element={<House0/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/quest-log" element={<QuestLog/>}/>
        <Route path="/sleep" element={<Sleep/>}/>
        <Route path="/meditate" element={<Meditate/>}/>
        <Route path="/vaspon-village" element={<VasponVillage/>}/>
        <Route path="/vv-interact" element={<VVInteract/>}/>
        <Route path="/credits" element={<Credits/>}/>
      </Routes>
    </Router>
  );
}
