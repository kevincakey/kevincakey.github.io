import React from "react";
import "./Map.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
// import "leaflet/dist/leaflet.css"

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  return (
    <div id="map">
      <MapContainer center={[37.56, -122.05]} zoom={7}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[37.56, -122.05]} icon={customIcon}>
          <Popup>
            <h2>Here I am</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
