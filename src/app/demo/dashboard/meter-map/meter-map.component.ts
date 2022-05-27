import { Router } from '@angular/router';
import { ApprovalService } from './../../../../Service/approval.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { MapMeterDetail } from 'src/Models/MapMeterDetail';

@Component({
  selector: 'app-meter-map',
  templateUrl: './meter-map.component.html',
  styleUrls: ['./meter-map.component.scss']
})
export class MeterMapComponent implements OnInit {
  map: L.Map;
  markers: L.LayerGroup;
  window = window;
  data:MapMeterDetail=new MapMeterDetail()
  constructor(private approvalService:ApprovalService,private route:Router) { }

  ngOnInit() {
    
    this.approvalService.currentApprovalStageMessage.subscribe(msg => this.data=msg)
    console.log(this.data.meter.country);
    
    this.initMap(this.data.Lant, this.data.Long,this.data.meter.meter_Type+",   "+this.data.meter.mrid)

  }
  ReturnToList(){
    this.route.navigateByUrl("/dashboard/Consulter_SF")
  }
  initMap(Lant,Lang,popup) {
  


    this.markers = new L.LayerGroup();
    //console.log(this.map);
    
    if (!this.map) {
     
      this.map = new L.Map("map");
      //this.map.fitBounds(this.map.getBounds());
    }
    let layer = new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { minZoom: 3, attribution: "Talan Moetez" })
    layer.addTo(this.map);
    this.map.setView(
      new L.LatLng(Lant, Lang),
      4
    )
    L.marker([Lant, Lang]).addTo(this.map).bindPopup(popup).openPopup();
    
  }
}
