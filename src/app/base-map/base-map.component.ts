import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapComponent, MapService } from 'ngx-mapbox-gl';
import { take } from 'rxjs';
import { MapboxStyleService } from './mapbox-style-service/mapbox-style.service';

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.less'],
  providers: [MapService],
})
export class BaseMapComponent extends MapComponent {
  constructor(
    private baseMapService: MapService,
    private mapboxStyleService: MapboxStyleService
  ) {
    super(baseMapService);
    this.mapboxStyleService
      .get()
      .pipe(take(1))
      .subscribe((style) => {
        this.style = style;
        this.baseMapService.updateStyle(this.style as mapboxgl.Style);
      });
  }
}
