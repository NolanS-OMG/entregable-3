import { useEffect, useState } from "react";
import PlaceSearched from "./PlaceSearched.js";
const SearchBox = ({ onSearch }) => {
    // Función que pide datos a la API
    // Recibe siempre un string
    const getTemporalLocation = async (place) => {
        let url = `https://rickandmortyapi.com/api/location/?name=${place}`;
        setData(await fetch(url).then(res => res.json()));
        // Cada que se recojen datos se muestra en pantalla las busquedas posibles
        setShowPlaces(true);
    }
    // Cuando se clicka un lugar
    const setClickedPlace = (place,index) => {
        // Se muestra el lugar en el input
        setValue(place);
        // Se busca ese lugar
        search(index);
    }
    // Función que busca el lugar elegido
    const search = (index=0) => {
        // Como ya buscamos no se muestran las ociones a elegir
        setShowPlaces(false);
        // Si place existe: Se coloca el nombre del lugar y se manda su ID para buscarlo
        // Si place NO existe: Se deja el nombre ya puesto y se manda ID 0 (es un lugar desconocido)
        setValue(places ? places[index].name: value);
        onSearch(places ? places[index].id: 0);
    }

    // Guarda el valor del input
    const [value, setValue] = useState("");
    // Guarda los datos de la API
    const [data, setData] = useState("");
    // Guarda un booleano que pregunta si mostramos los lugares a elegir
    const [showPlaces, setShowPlaces] = useState(false);
    // Guarda los lugares a elegir
    const [places, setPlaces] = useState([]);
    // Guarda un máximo de 8 lugares a mostrar
    const placesBoxes = places ? places.map( (value,index) => {return(showPlaces && index < 8 && <PlaceSearched key = {value.name} name = {value.name} index = {index} selectPlace = {setClickedPlace}/>)} ): [];
    // Cuando actualizamos data, actualizamos los lugares
    useEffect( () => {
        setPlaces(data.results);
    }, [data] )
    return (
        // CONTIENE EL INPUT LAS OPCIONES Y EL BOTON
        <div className = "searcher-container">
            {/* INPUT PARA EL LUGAR */}
            <input value = {value} 
            // Cada que cambia
                onChange={(e) => {
                // Se coloca el cambio
                setValue(e.target.value);
                // Se busca el valor en la API
                getTemporalLocation(e.target.value);
                }}
                // Cada que se presiona un tecla
                onKeyDown = { (e) => {
                    // Si es Enter: Busca lo escrito en el input
                    if (e.code === "Enter") search();
                } }
            />
            {/* GUARDA LOS LUGARES A ELEGIR */}
            <ul className = "place-searcher" style = {showPlaces ? {display:"flex"}:{display:"none"}}>
                {placesBoxes}
            </ul>
            {/* BOTON PARA BUSCAR */}
            <button onClick = {search}>Search</button>
        </div>
    )
}

export default SearchBox;