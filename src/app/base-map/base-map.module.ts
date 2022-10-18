import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { BaseMapComponent } from './base-map.component';
import { BING_MAP_API_KEY } from './mapbox-style-service/mapbox-style.service';

@NgModule({
  declarations: [BaseMapComponent],
  imports: [CommonModule, NgxMapboxGLModule],
  exports: [BaseMapComponent],
})
export class BaseMapModule {
  public static withConfig(config: {
    bingMapApiKey: string;
  }): ModuleWithProviders<BaseMapModule> {
    return {
      ngModule: BaseMapModule,
      providers: [
        {
          provide: BING_MAP_API_KEY,
          useValue: config.bingMapApiKey,
        },
      ],
    };
  }
}

export { BaseMapComponent };
