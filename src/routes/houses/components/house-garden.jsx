export const HouseGarden = ({img}) => {
    return (
    <div className="house-room">
        <div className="house-room-info" style={{backgroundImage: `url(${img})`}}><h1>Garden</h1></div>
        <div className ="house-room-options">
            <div className="house-room-option"><h2>Exit</h2></div>
        </div>
    </div>
    )
}