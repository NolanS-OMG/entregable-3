import { useEffect, useState } from "react";
import LocationInfo from "./LocationInfo.js"

// Location es el array con los datos del lugar
const LocationContainer = ({location}) => {
    // Guardamos en variables los datos que nos interesan
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dimension, setDimension] = useState("");
    const [residents, setResidents] = useState("");
    const [data, setData] = useState(location);

    // Cuando se actualizan los datos sea dentro o fuera del componente
    useEffect( () => {
        if (data) {
            setName(data.name);
            setType(data.type);
            setDimension(data.dimension);
            setResidents(data.residents.length);
        }
        setData(location);
    }, [data,location] )

    return (
        <div className = "location-container">
            <h4>Location Info</h4>
            <LocationInfo name = {name} type = {type} dimension = {dimension} residents = {residents}/>
        </div>
    )
}

export default LocationContainer;