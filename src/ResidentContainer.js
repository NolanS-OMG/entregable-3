import { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo.js";

// character Es una URL
const ResidentContainer = ({character}) => {
    // La función recoge los datos del personaje
    const getLocation = async (url) => {
        setData(await fetch(url).then(res => res.json()));
      }
    // Guardamos sus datos
    const [data, setData] = useState();
    // Solo los que nos interesan estan en variables
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState("");
    const [origin, setOrigin] = useState("");
    const [episodes, setEpisodes] = useState(0);
    // Cada que se actualizan los datos, sea dentro o fuera del componente
    useEffect( () => {
        if (data) {
            setName(data.name);
            setImage(data.image);
            setStatus(data.status);
            setOrigin(data.origin.name);
            setEpisodes(data.episode.length);
        }
        getLocation(character);
    }, [data, character] )
    return (
        <li className = "resident-container">
            <ResidentInfo
            name = {name} 
            image = {image} 
            status = {status} 
            origin = {origin} 
            episodes = {episodes}
            />
        </li>
    )
}

export default ResidentContainer;