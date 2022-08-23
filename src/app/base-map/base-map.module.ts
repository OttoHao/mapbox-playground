import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseMapComponent } from './base-map.component';
import { MAPBOX_API_KEY, NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [BaseMapComponent],
  imports: [CommonModule, NgxMapboxGLModule],
  exports: [BaseMapComponent, NgxMapboxGLModule],
})
export class BaseMapModule {
  public static withMapBox(config: {
    accessToken: string;
  }): ModuleWithProviders<BaseMapModule> {
    return {
      ngModule: BaseMapModule,
      providers: [
        {
          provide: MAPBOX_API_KEY,
          useValue: config.accessToken,
        },
      ],
    };
  }
}

export { BaseMapComponent };
