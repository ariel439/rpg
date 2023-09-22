import { HouseBedroom } from "./components/house-bedroom"
import { HouseLibrary } from "./components/house-library"
import { HouseKitchen } from "./components/house-kitchen"
import { HouseGarden } from "./components/house-garden"
import bedroom from "../../imgs/house/bedroom.png"
import library from "../../imgs/house/library.png"
import kitchen from "../../imgs/house/kitchen.png"
import garden from "../../imgs/house/garden.png"

export const House0 = () => {
    return (
    <div className="house">
        <HouseBedroom img={bedroom}/>
        <HouseLibrary img={library}/>
        <HouseKitchen img={kitchen}/>
        <HouseGarden img={garden}/>
    </div>
    )
}