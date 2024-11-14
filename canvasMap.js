export default class CanvasMap {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
    }

    loadGeoJson(json) {
        this.geoJson = json;
        this.minX = this.geoJson.features[0].geometry.coordinates[0][0];
        this.maxX = this.geoJson.features[0].geometry.coordinates[0][0];
        this.minY = this.geoJson.features[0].geometry.coordinates[0][1];
        this.maxY = this.geoJson.features[0].geometry.coordinates[0][1];
        for (let feature of this.geoJson.features) {
            for (let coordinate of feature.geometry.coordinates) {
                if (coordinate[0] < this.minX) {
                    this.minX = coordinate[0];
                }
                if (coordinate[0] > this.maxX) {
                    this.maxX = coordinate[0];
                }
                if (coordinate[1] < this.minY) {
                    this.minY = coordinate[1];
                }
                if (coordinate[1] < this.maxY) {
                    this.minY = coordinate[1];
                }
            }
        }
        this.Xscale = this.maxX - this.minX;
        this.Yscale = this.maxY - this.minY;
        this.drawGeoJson();
    }

    drawGeoJson() {
        for (let feature of this.geoJson.features) {
            this.drawRoad(feature)
        }
    }

    drawRoad(feature) {
        this.context.beginPath();
        this.context.drawStyle = "blue";
        this.context.moveTo((feature.geometry.coordinates[0][0] - this.minX)/this.Xscale*this.canvas.width,(feature.geometry.coordinates[0][1] - this.minY)/this.Yscale*this.canvas.height);
        this.context.lineTo((feature.geometry.coordinates[1][0] - this.minX)/this.Xscale*this.canvas.width,(feature.geometry.coordinates[1][1] - this.minY)/this.Yscale*this.canvas.height);
        this.context.stroke();
    }
}
