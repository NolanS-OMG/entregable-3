const PlaceSearched = ({name, index, selectPlace}) => {
    return (
        <li className = "place-searcher" 
        // Cuando se clicka: Se busca el valor clickado
        onClick={() => {selectPlace(name,index)}}>
            {name}
        </li>
    )
}

export default PlaceSearched;