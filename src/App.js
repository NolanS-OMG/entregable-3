import { useEffect, useState } from "react";
import SearchBox from "./SearchBox.js";
import VerticalBar from "./VerticalBar.js";
import LocationContainer from "./LocationContainer.js";
import ResidentContainer from "./ResidentContainer.js";
import "./index.css";

function App() {
  // Función que pide los datos a la API
  // La función recibe siempre un número
  const getLocation = async (place) => {
    let url = `https://rickandmortyapi.com/api/location/${place}`;
    setData(await fetch(url).then(res => res.json()));
  }

  // Guarda los datos de la API
  const [data, setData] = useState("");
  // Guarda la lista de los residentes de "data"
  const [residents, setResidents] = useState([]);

  // Guarda una lista con los números de páginas que hay
  const [pagesNumber, setPagesNumber] = useState([1]);
  // Guarda la página que se muestra
  const [pageChosen, setPageChosen] = useState(1);

  // Guarda las cajas que muestran la imagen e información de cada residente
  const residentBoxes = residents.map( (value,index) => {return ((index < (10*pageChosen) && index >= (10*(pageChosen-1))) && <ResidentContainer key = {value} character = {value}/>)} );
  
  // Guarda las cajas que muestran los números de páginas
  const pageNumbersBoxes = pagesNumber.map( (value) => {return (<li key = {value} onClick = {() => {setPageChosen(value)}}>{value}</li>)} )
  
  // Cuando los datos se actualizan
  useEffect( () => {
    if (data) {
      setResidents(data.residents);
    } else {
      // Solo se ejecuta al principio
      getLocation(Math.floor(108*Math.random()+1).toString());
    }
  }, [data]);

  // Cuando los residentes se actualizan se renuevan los números de página
  useEffect( () => {
    let tempPagesNumber = [];
    for (let i = 0; i < Math.ceil(residents.length/10); i++) {
      tempPagesNumber.push(i+1);
    }
    setPagesNumber(tempPagesNumber);
  }, [residents] )
  return (
    /*CONTENEDOR DE TODO*/
    <div className = "page-container">
      {/* PARTE IZQUIERDA DE LA PÁGINA */}
        <div className = "front-info">
          {/* TÍTULO Y DESCRIPCIÓN */}
          <div>
            <h1>The Rick & Morty searcher</h1>
            <p>Here you can search any place on the Rick & Morty universe and find what characters are in that place</p>
          </div>
          {/* BUSCADOR */}
          <SearchBox onSearch = {getLocation}/>
          {/* INFORMACIÓN DEL LUGAR */}
          <LocationContainer location = {data}/>
        </div>
        {/* BARRA QUE SEPARA LAS DOS PARTES */}
        <VerticalBar/>
        {/* PARTE DERECHA DE LA PÁGINA */}
        <div className = "residents-part-container">
          {/* CONTENEDOR DE LOS RESIDENTES */}
          <div className = "green-container-bar">
            <ul className = "residents-container">{residentBoxes}</ul>
          </div>
          {/* CONTENEDOR DE LOS NÚMEROS DE PÁGINA DE LOS RESIDENTES */}
          <div className = "page-chooser">
            <ul>{pageNumbersBoxes}</ul>
          </div>
        </div>
    </div>
  );
}

export default App;
