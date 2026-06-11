import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

function RecenterMap({
  position,
}: {
  position: LatLngExpression;
}) {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [position, map]);

  return null;
}

// Fix default marker assets (optional)
// delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Avatar icon
const avatarIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:50px;
      height:50px;
      border-radius:50%;
      overflow:hidden;
      border:3px solid white;
      box-shadow:0 0 10px rgba(0,0,0,.2);
    ">
      <img
        src="https://i.pravatar.cc/100"
        style="
          width:100%;
          height:100%;
          object-fit:cover;
        "
      />
    </div>
  `,
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

type Props = {
  position: LatLngExpression;
};

export default function MapView({ position }: Props) {
  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={avatarIcon}><Popup>You are here</Popup></Marker>
      <RecenterMap position={position} />
    </MapContainer>
  );
}