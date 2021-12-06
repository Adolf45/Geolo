  //Importamos los Archivos
import React,{useState} from 'react';
import Mapquest from './components/Mapquest';
import Ubication from './components/ubication';

import Busqueda from './components/busqueda';


function App() {
  //component state
  const [lat, setLat] = useState('19.033333');
  const [lng, setLng] = useState('-98.183334');

// Para poder borar despues los marcadores 
const [markers, setMarkers] =useState([]);

     //Fijar el centro del Mapa
     const setCenter =(lat,lng) =>{
       setLat(lat);
       setLng(lng);

       window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat,lng),14);
     };
const addMarker = (lat,lng, title, subtitle)=>{
 const marker = window.L.mapquest.textMarker(
    new window.L.LatLng(lat,lng),
    {
      text:title || '',
      subtext: subtitle || '',
      position: 'right',
      type: 'marker',
      icon: {
        primaryColor: '#a8190f',
        secondaryColor: '#db2c2c',
        size: 'md'
      }
    }
 )
.addTo(window.L.mapquest.Map.getMap('map'));
// El marker lo podemos agregar a los markers 
const copyMarkers =markers.slice(0);
copyMarkers.splice(0,0, marker);  //push(marker);
     setMarkers(copyMarkers);
};

const clearMarkers = ( )=>{
markers.forEach(marker=> {
  window.L.mapquest.Map.getMap('map').removeLayer(marker);

});
 //Limpiar state
 setMarkers([]);
};
  return (
    <div className="container-fluid">
      <div className="row pl-3 pr-3 pt-3 pb-3">
        <div className="col-sm-10">
          <Busqueda  setCenter={setCenter} addMarker={addMarker} clearMarkers={clearMarkers}
          />

        </div>
        <div className="col-sm-2">
           <Ubication setCenter={setCenter} setMarker={addMarker}/>
        </div>
      </div>
      <Mapquest
      height="80vh"
      width="90%"
      center={[lat,lng]}
      tileLayer={'map'} //map, dark
      zoom={12}
      apiKey="NyExP3zthiXZyG9b2AZFFaRuHqAeZG7R"

      />
      
    </div>

  );
}

export default App;
