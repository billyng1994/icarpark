import {React,useState} from 'react';
import App from '../../App';
import { GoogleMap, withGoogleMap, Marker, withScriptjs } from "react-google-maps";
import GovCarparkItem from "../../domain/CarparkVacancyDos";

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Map() {
    const [selectedPark,setSelectedPark] = useState(null);
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 22.43649101, lng: 113.99769592 }}
        >
            {GovCarparkItem.map((park) => (
                <Marker key={park.park_Id}
                    position={{ lat: park.latitude, lng: park.longitude }}
                    onClick={() => 
                       setSelectedPark(park);
                     } />
            ))}
        </GoogleMap>

    );
}

export default class SearchResult extends React.Component {
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCjCVCEaRCewdaqDQE6ocCPC1x_W-EsS-g`}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        )
    }
}
