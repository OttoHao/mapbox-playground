import { Component } from '@angular/core';
import { GeoJSONSourceRaw, Layer, Map, MapMouseEvent } from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public polygonGeoJson!: GeoJSONSourceRaw;
  public layerPaintOptions!: Layer['paint'];
  public map?: Map;

  constructor() {
    this.polygonGeoJson = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-101.78222805261612, 33.587252246252255],
                  [-101.78225487470627, 33.58723213665846],
                  [-101.78227096796036, 33.587209792659856],
                  [-101.78227901458739, 33.58718968305618],
                  [-101.7822602391243, 33.58716287024396],
                  [-101.78223878145216, 33.58714499503119],
                  [-101.78219050168991, 33.58713605742341],
                  [-101.78213953971863, 33.58713605742341],
                  [-101.78209662437438, 33.587147229432986],
                  [-101.78208589553833, 33.58716733904656],
                  [-101.78209125995636, 33.587207558259685],
                  [-101.78211271762848, 33.5872366054575],
                  [-101.78215563297272, 33.58725448065128],
                  [-101.78222805261612, 33.587252246252255],
                ],
              ],
            },
          },
        ],
      },
    };

    this.layerPaintOptions = {
      'fill-color': '#0982d5',
      'fill-opacity': 0.8,
    };
  }

  public onMapLoad(event: Map) {
    this.map = event;
  }

  public onMouseOver(event: boolean) {
    this.layerPaintOptions = {
      'fill-color': event ? '#000000' : '#0982d5',
      'fill-opacity': 0.8,
    };
  }
}
