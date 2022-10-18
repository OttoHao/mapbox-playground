import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseMapModule } from './base-map/base-map.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BaseMapModule.withConfig({
      bingMapApiKey:
        'AlQha3LgKs0LR7fZUCcUeWAgBD5xZOxTywB2y767b896h6Zb3T3RSsFotnGUAsm2',
    }),
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoibWFyaWFtaS1hciIsImEiOiJja3M0OWt6N2cwMDU4MnZxaWt2b3UzZnJtIn0.QmACx6ispORZEumr84OGuA',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
