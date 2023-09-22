export const HouseKitchen = ({img}) => {
    return (
    <div className="house-room">
        <div className="house-room-info" style={{backgroundImage: `url(${img})`}}><h1>Kitchen</h1></div>
        <div className ="house-room-options">
            <div className="house-room-option"><h2>Cook</h2></div>
            <div className="house-room-option"><h2>Deposit</h2></div>
        </div>
    </div>
    )
}