import React from 'react'
import "./Map.scss"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
// import "leaflet/dist/leaflet.css"

const Map = () => {
  return (
	<div id="map">
		<MapContainer center={[44, 19]} zoom={13}>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
			<Marker position={[44,19]}>
				<Popup>Test1</Popup>
			</Marker>
		</MapContainer>
	</div>
  )
}

export default Map