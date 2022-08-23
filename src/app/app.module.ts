import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseMapModule } from './base-map/base-map.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BaseMapModule.withMapBox({
      accessToken:
        'pk.eyJ1IjoibWFyaWFtaS1hciIsImEiOiJja3M0OWt6N2cwMDU4MnZxaWt2b3UzZnJtIn0.QmACx6ispORZEumr84OGuA',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
