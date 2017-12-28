import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common/';
import { FormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {} from '@types/youtube';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    CommonModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCpZ7UDPTLXNaypNN_jiIkjpyMyk_3M8s'
    })
  ],
  providers: [DataService], // <-Add DataService
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
