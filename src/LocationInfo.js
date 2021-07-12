const LocationInfo = (props) => {
    return (
        <div className = "location-info-container">
            <p>
                <b>Name:</b> <span>{props.name}</span>
            </p>

            <p>
                <b>Type:</b> <span>{props.type}</span>
            </p>

            <p>
                <b>Dimension:</b> <span>{props.dimension}</span>
            </p>

            <p>
                <b>Residents:</b> <span>{props.residents}</span>
            </p>
        </div>
    )
}

export default LocationInfo;