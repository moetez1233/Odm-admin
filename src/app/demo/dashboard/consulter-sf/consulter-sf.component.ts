import { ShipmentFile } from './../../../../Models/ShipmentFileINfo/ShipementFile';
import { ConsulterSfService } from './consulter-sf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-sf',
  templateUrl: './consulter-sf.component.html',
  styleUrls: ['./consulter-sf.component.scss']
})
export class ConsulterSfComponent implements OnInit {
shipmentFile:ShipmentFile[]
clickedSf:ShipmentFile =new ShipmentFile()
adminIndex = false;
SfColor = []


  constructor(private consulterSfService:ConsulterSfService) { }

  ngOnInit() {
    this. AllSF()
  }
  AllSF(){
    this.consulterSfService.getAllSf().subscribe( (res)=>{
     this.shipmentFile=res as ShipmentFile[];
     // console.log(this.shipmentFile[0].name);
      
      }  )
  }
  ShipmentFileClicked(index){
    this.clickedSf=this.shipmentFile[index];
    console.log(this.clickedSf.historiques[0].idHistorique.modefication_sf);
    
  }

  hoverOn(adminIndex) {
    if (adminIndex !== this.adminIndex)
      this.SfColor[adminIndex] = "dark"
  }
  
  hoverOff(adminIndex) {
    if (adminIndex === this.adminIndex) {
      this.SfColor[adminIndex] = "primary"
    } else {
      this.SfColor[adminIndex] = "light"
    }
  }
  cherchStatus(status){
   this.consulterSfService.getSfByStatus(status.value).subscribe(res=>{
    this.shipmentFile=res as ShipmentFile[];
   })
   
  }

}
