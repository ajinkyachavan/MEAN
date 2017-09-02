

import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DataService } from '../services/data.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'app-map-india',
  templateUrl: './map-india.component.html',
  styleUrls: ['./map-india.component.css']
})

export class MapIndiaComponent {



  title = 'Test';
  DataArray: any = [];
  result: any = [];
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  isClicked: boolean = false;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  id = 'qDuKsiwS5xw';
  width = window.innerWidth * 0.4;
  height = window.innerHeight * 0.5;
  private player;
  private ytEvent;

  constructor(public data: DataService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {


    this.loadTableData();

    console.log('myArr',this.DataArray);



    // $(function(){
    //   $('#example').DataTable();
    //   });

  }

  ngOnInit(): void {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;


    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();



    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address'] //address  [ '(cities)', '(regions)', 'country', 'postal_code', 'sublocality', 'establishment', 'address', 'geocode']

      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //  service = new google.maps.places.PlacesService(map);
          //  service.nearbySearch(request, callback);
          //  //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;

        });
      });
    });
  }

  changeId(newId){
    this.id = newId;
    console.log(this.id);
    this.player.loadVideoById(this.id);  }

  private setCurrentPosition(newPosition: any = null) {
    console.log(newPosition + " newPosition")
    if ("geolocation" in navigator && newPosition == null) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;

      });
    } else {
      var myPosition = new Position();
      myPosition = newPosition;

      console.log(newPosition.latitude, newPosition.longitude, " newPosition andar")

      this.latitude = myPosition.coords.latitude;
      this.longitude = myPosition.coords.longitude;
      this.zoom = 12;


    }
  }

  loadTableData() {
    this.data.loadData().subscribe(
      data => {
        this.DataArray = data;
        console.log(data);
      }
    );
  }

  placeMarker($event) {
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }

  cityData(data) {

  this.isClicked = true;
    //console.log('printing data - '+data.target.innerText);
    this.result = this.DataArray[0];

    for (var i = 0; i < this.DataArray.length; i++) {
      //console.log(this.DataArray[i].title,data.target.innerText, this.DataArray[i].title === data.target.innerText, typeof(this.DataArray[i].title), typeof(data.target.innerText));
      if (this.DataArray[i].title === data.target.innerText) {
        this.result = this.DataArray[i];
      }
    }
    //console.log(result)
    document.getElementById('placeDiv').style.display = 'block';

    document.getElementById("frameImg").setAttribute('src', this.result.imageUrl);
    document.getElementById("frameTitle").innerText = this.result.bio;
    document.getElementById("framePara").innerText = this.result.description;

    this.latitude = parseFloat(this.result.latitude);
    this.longitude = parseFloat(this.result.longitude);
    // this.setCurrentPosition(result);
    // this.latitude = result.latitude;
    // this.longitude = result.longitude;
    // this.zoom = 12;
    // //console.log(document.getElementById("frameImg").getAttribute("src"))
    /*
   document.getElementById("placeDiv").style.border = "1px solid #808080";
   document.getElementById("placeDiv").style.margin = "30px";
   document.getElementById("placeDiv").style.padding = "15px";
   if(result != null)
     document.getElementById("placeDiv").appendChild(p).innerText = result.title;
   else
     document.getElementById("placeDiv").appendChild(p).innerText = data.target.innerText;
   */

  }


  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

}
