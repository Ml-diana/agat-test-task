import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import DataInputForm from "./components/Data-input-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchShapes } from "./store/api-action";
import DataPoints from "./Components/Data-points";

function App() {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const dataLayerRef = useRef(null);
  useEffect(() => {
    dispatch(fetchShapes());
  }, [dispatch]);

  const data = useSelector((state) => state.shapes);
  const error = useSelector((state) => state.error);
console.log(data);
  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map("map-id", { zoomControl: false }).setView(
        [55.7522, 37.6156],
        5
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      mapRef.current = map;
    }

    function onEachFeature(feature, layer) {
      if (feature.properties) {
        layer.bindPopup(feature.properties.name);
      }
    }

    if (data) {
      if (dataLayerRef.current) {
        mapRef.current.removeLayer(dataLayerRef.current);
      }
    
      const geoJsonLayer = L.geoJSON(data, {
        onEachFeature: onEachFeature,
      }).addTo(mapRef.current);
    
      dataLayerRef.current = geoJsonLayer;
    }
  }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="map-id">
      <DataPoints data={data}/>
      <DataInputForm />
    </div>
  );
}

export default App;
