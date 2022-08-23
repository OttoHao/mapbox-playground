import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MapComponent, MapService } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.less'],
  providers: [MapService],
})
export class BaseMapComponent implements AfterViewInit {
  @ViewChild(MapComponent) public mapComponent!: MapComponent;
  constructor(private mapService: MapService) {}
  ngAfterViewInit(): void {
    // a workaround to change to reference of map service to the wrapper's injected map service
    this.mapComponent['mapService'] = this.mapService;
    console.log(this.mapComponent);
  }
}
