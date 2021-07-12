const ResidentInfo = (props) => {
    return (
        <div className = "resident">
            <div className = "resident-image-container">
                <img src = {props.image} alt = {props.name}/>
            </div>
            <div className = "resident-info">
                <p>
                    <b>Name:</b> <span>{props.name}</span>
                </p>
                <p>
                    <b>Status:</b> <span>{props.status}</span>
                </p>
                <p>
                    <b>Origin:</b> <span>{props.origin}</span>
                </p>
                <p>
                    <b>Number of episodes:</b> <span>{props.episodes}</span>
                </p>
            </div>
        </div>
    )
}

export default ResidentInfo;