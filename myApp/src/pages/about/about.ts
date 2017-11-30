import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapRef:ElementRef;
 

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
     this.DisplayMap();
  }

  DisplayMap(){

     const location = new google.maps.LatLng(13.0005618,80.2478447);

     const options = {
        center:location,
        zoom:10,
        streetViewControl:false,
       
      };
        const map = new google.maps.Map(this.mapRef.nativeElement,options);
      this.addMarker(location,map);
  }

  addMarker(position,map) {
      return new google.maps.Marker({
        position,
        map
      });
    }

}
