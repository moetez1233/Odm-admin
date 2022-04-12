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
DragDrop=true;
ISImportAbord=false;
SfColor = []
ShowDetails=false

  constructor(private consulterSfService:ConsulterSfService) { }

  ngOnInit() {
    this.AllSF()
    console.log("hello");
    
    setInterval(()=>{this. AllSF(); console.log("hello");},1000)
  }
  AllSF(){
    this.consulterSfService.getAllSf().subscribe( (res)=>{
     this.shipmentFile=res as ShipmentFile[];
      console.log(this.shipmentFile[0].user.name);
      
      }  )
  }
  ShipmentFileClicked(index){
    this.ShowDetails=true;
    this.clickedSf=this.shipmentFile[index];
    this.ISImportAbord=false;
    console.log(this.clickedSf.user);
    
    if(this.clickedSf.status=="Import-Aborded"){
      this.ISImportAbord=true;
    }
   if(this.clickedSf.user){
   
    this.DragDrop=true;
   
   }else{
    this.DragDrop=false;
   }
    
    console.log(this.clickedSf.historiques[0].idHistorique.modefication_sf);
    
  }
  ReturnToList(){
    this.ShowDetails=false;
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
    this.ISImportAbord=false;
    if(status.value=="tous"){
      this. AllSF()
   
    }
  
    //this.ISImportAbord=false;
   this.consulterSfService.getSfByStatus(status.value).subscribe(res=>{
    this.shipmentFile=res as ShipmentFile[];
   })
   
  }
 

}
