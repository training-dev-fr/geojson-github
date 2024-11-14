import CanvasMap from "./canvasMap.js";

let canvas = new CanvasMap(document.querySelector("#geomap"));
canvas.canvas.width = canvas.canvas.closest(".map").clientWidth -4;
canvas.canvas.height = canvas.canvas.closest(".map").clientHeight -4;

fetch("./simulated_city_network_methodical.geojson")
.then(result => result.json())
.then(data => canvas.loadGeoJson(data))

