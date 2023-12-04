import "./style.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./routes/Home"
import { Cc } from "./routes/util/cc"
import { Credits } from "./routes/util/credits"
import { House0 } from "./routes/houses/house0"
import { Profile } from "./routes/houses/profile"
import { Sleep } from "./routes/houses/sleep"
import { QuestLog } from "./routes/houses/quest-log"
import { Meditate } from "./routes/houses/meditate"
import { Inventory } from "./routes/houses/inventory"
import { VasponVillage } from "./routes/regions/vaspon-island/vaspon-village"
import { VasponVillageShop } from "./routes/regions/vaspon-island/vv-shop"
import { Vaspon } from "./routes/regions/vaspon-island/vaspon"
import { Dialogue } from "./routes/mechanics/interact/interact"
import { VasponVillageCastle } from "./routes/regions/vaspon-island/vv-castle"
import { VasponVillageDocks } from "./routes/regions/vaspon-island/vv-docks"
import { VasponForest } from "./routes/regions/vaspon-island/vaspon-forest"

export default function App(){
  return (
    <Router basename="rpg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cc" element={<Cc/>}/>

        <Route path="/profile" element={<Profile/>}/>
        <Route path="/quest-log" element={<QuestLog/>}/>
        <Route path="/sleep" element={<Sleep/>}/>
        <Route path="/meditate" element={<Meditate/>}/>
        <Route path="/inventory" element={<Inventory/>}/>

        <Route path="/vaspon" element={<Vaspon/>}/>
        <Route path="/vaspon-village" element={<VasponVillage/>}/>
        <Route path="/house0" element={<House0/>}/>
        <Route path="/vaspon-village-shop" element={<VasponVillageShop/>}/>
        <Route path="/vaspon-village-castle" element={<VasponVillageCastle/>}/>
        <Route path="/vaspon-village-docks" element={<VasponVillageDocks/>}/>
        <Route path="/vaspon-village-docks" element={<VasponVillageDocks/>}/>
        <Route path="/vaspon-forest" element={<VasponForest/>}/>

        <Route path="/dialogue" element={<Dialogue/>}/>
        <Route path="/credits" element={<Credits/>}/>
      </Routes>
    </Router>
  );
}
