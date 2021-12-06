import React from 'react';

const Ubication = ({setCenter, setMarker}) => { 
    const findMe =()=> {
        if(!navigator.geolocation){
           alert("El Navegador no soporta la geolocalización ");
           return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
               const{latitude, longitude} = position.coords;
               if(setCenter){
                   setCenter(latitude,longitude);
               }
               if(setMarker){
                   //Le mandamos la latitud y longitud 
                   setMarker(latitude,longitude, 'Mi ubicación',`lat: ${latitude}, lng: ${longitude}`);
               }
        },
            (error) => {
                  alert('Error al obtener la ubicación');
            }
        );
    };
    return (
     <button
     type="button"
     className="btn btn-info"
     onClick = {findMe}
     >
       Mi ubicación  
     </button>

    );
};

export default Ubication;