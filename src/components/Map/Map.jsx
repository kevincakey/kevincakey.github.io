import React from "react";
import "./Map.scss";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
// import "leaflet/dist/leaflet.css"

const Map = () => {
  return (
    <div id="map">
      <MapContainer center={[37.56, -122.05]} zoom={7}>
        {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          attribution='<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>'
          url="https://wxs.ign.fr/choisirgeoportail/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}.png"
        />
        });
        <Marker position={[37.56, -122.05]}>
          <Popup>
            <h2>Here I am</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
