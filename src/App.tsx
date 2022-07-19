import { Circle, MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import './app.module.css'
import 'leaflet/dist/leaflet.css'
import { LatLng } from 'leaflet'

export function App() {
  return (
    <main>
      <MapContainer
        style={{ height: '100%', width: '100%' }}
        center={[0, 0]}
        zoom={16}
        minZoom={12}
        maxZoom={16}
        scrollWheelZoom={true}
        zoomControl={true}
        zoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="Map/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </main>
  )
}

function LocationMarker() {
  const position = new LatLng(-29.481914, -51.956431)

  const map = useMapEvents({
    click() {
      map.flyTo(position, map.getZoom())
    }
  })

  return (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
