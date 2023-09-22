
export const HouseBedroom = ({img}) => {
    return (
    <div className="house-room">
        <div className="house-room-info" style={{backgroundImage: `url(${img})`}}><h1>Bedroom</h1></div>
        <div className ="house-room-options">
            <div className="house-room-option"><h2>Bag</h2></div>
            <div className="house-room-option"><h2>Meditate</h2></div>
            <div className="house-room-option"><h2>Sleep</h2></div>
        </div>
    </div>
    )
}