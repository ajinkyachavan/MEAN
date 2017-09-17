import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PlanMyTripComponent } from './plan-my-trip/plan-my-trip.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MapIndiaComponent } from './map-india/map-india.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { DataService } from './services/data.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {} from '@types/googlemaps';
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { FormControl } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'planmytrip', component: PlanMyTripComponent },
  { path: 'mapindia', component: MapIndiaComponent },
  { path: 'contactus', component: ContactUsComponent }
];


@NgModule({
  declarations: [
     AppComponent,
    PlanMyTripComponent,
    ContactUsComponent,
    MapIndiaComponent
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    GooglePlaceModule,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe13TnWVfcgQx-kxNT-ck8mJ4RYMjNcJY',
      libraries: ["places"],
      region: 'IN'

    }),
     FormsModule,
     ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService], //DataService
  bootstrap: [AppComponent]
})
export class AppModule {



 }
