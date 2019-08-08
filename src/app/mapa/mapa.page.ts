import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var mapboxgl:any;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  providers:[Geolocation],
})
export class MapaPage implements OnInit , AfterViewInit{
 public latitud:any;
  public longitud:any;
  public punto:any;

  constructor(private geolocation: Geolocation) { 

    this.latitud=0;
    this.longitud=0;


  }

  

  ngOnInit() {

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("latitud:"+ resp.coords.latitude);
      console.log("longitud:"+ resp.coords.longitude);
      this.latitud=resp.coords.latitude;
      this.longitud=resp.coords.longitude;

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      console.log("data.latitud:"+ data.coords.latitude);
      console.log("data.longitud:"+data.coords.longitude);
      // data.coords.longitude
      this.latitud=data.coords.latitude;
      this.longitud=data.coords.longitude;
    });

  }

  ngAfterViewInit(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWRnYXJlbGlvIiwiYSI6ImNpcm5qMG05NzA4a3l0Mm5remI2dHptNmcifQ.OEmtFndm7IDHoCg_Gyt7Tw';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [ -63.169026,-17.769021], // starting position
zoom: 15 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
map.on("load",()=>{
map.resize();

new mapboxgl.Marker()
.setLngLat([-63.169026,-17.769021])
.addTo(map);

console.log("("+this.latitud+","+this.longitud+")");

new mapboxgl.Marker()
.setLngLat([this.longitud,this.latitud])
.addTo(map);
});

 var el = document.createElement('div');
  el.className = 'marker';
new mapboxgl.Marker(el) 
.setLngLat([-63.160,-17.769021])
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>titulo</h3><p></p>'))
.addTo(map);


}

}
