import { MetersGaz } from './../../../../Models/MetersGaz';
import { Meters } from './../../../../Models/Meters';
import { Historique } from './../../../../Models/ShipmentFileINfo/Historique';
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
meters:any
Show_Cahnnel=false
msg_nbr_Resume=""
historiques:Historique[]
DateChangement_Status:string;
clickedSf:ShipmentFile =new ShipmentFile()
adminIndex = false;
DragDrop=true;
ISImportAbord=false;
ISImportAbord_KMS=false;
SfColor = []
ShowDetails=false
showList_Meters=false;
page = 1
pageMeter=1
MaxSize=5

  constructor(private consulterSfService:ConsulterSfService) { }

  ngOnInit() {
    this.AllSF()
    console.log("hello");
    
    /*setInterval(()=>{this. AllSF(); console.log("hello");},1000)*/
  }
  AllSF(){
    this.consulterSfService.getAllSf(1).subscribe( (res)=>{
      console.log(res);
      
     this.shipmentFile=res as ShipmentFile[];
      console.log(this.shipmentFile[0]);
     
      
      }  )
  }
  
  pageChange(){
    this.consulterSfService.getAllSf(this.page).subscribe( (res)=>{
      console.log(res);
      
     this.shipmentFile=res as ShipmentFile[];
      console.log(this.shipmentFile[0]);
   
      
      }  )
   
  }
  ShipmentFileClicked(index){
   
    this.ShowDetails=true;
    this.clickedSf=this.shipmentFile[index];
    this.HistoriqueSF(this.clickedSf.name);
    this.msg_nbr_Resume=this.clickedSf.nbr_Resume;
    this.ISImportAbord=false;
    console.log(this.clickedSf.user);
    if(this.clickedSf.name.startsWith("AMM")){
      
      this.MetersSf(this.clickedSf.name,1)
      this.Show_Cahnnel=false
    
    }
    else {
      this.MeterGazSF(this.clickedSf.name,1)
      this.Show_Cahnnel=true
    }
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
  MetersSf(nameS,fnpage){
    this.showList_Meters=false;
this.consulterSfService.getAllMeters(nameS,fnpage).subscribe((res)=>{
  console.log(res);
  
  this.meters=res as Meters[]
console.log(this.meters[0]);

if(this.meters.length!=0){
 
  this.showList_Meters=true;
}

  
})
  }
MeterGazSF(nameS,fnpage){
  this.showList_Meters=false;
this.consulterSfService.getAllMetersGAZ(nameS,fnpage).subscribe((res)=>{
console.log(res);

this.meters=res as MetersGaz[]
console.log(this.meters[0]);

if(this.meters.length!=0){

this.showList_Meters=true;
}


})
}
  pageChangeMeter(){
    console.log(this.pageMeter);
    if(this.clickedSf.name.startsWith("AMM")){
      this.consulterSfService.getAllMeters(this.clickedSf.name,this.pageMeter).subscribe((res)=>{
        this.meters=res as Meters[]
      })
    }else{
      this.consulterSfService.getAllMetersGAZ(this.clickedSf.name,this.pageMeter).subscribe((res)=>{
        this.meters=res as MetersGaz[]
      })
    }
 
  }
  HistoriqueSF(nameSf){
    this.consulterSfService.getHistBySF(nameSf).subscribe( (res)=>{
      console.log(res);
      this.ISImportAbord_KMS=true;
     this.historiques=res as Historique[];
     console.log(this.historiques[this.historiques.length-1].nomStatus);
     this.DateChangement_Status=this.historiques[this.historiques.length-1].idHistorique.modefication_sf
     if(this.historiques[this.historiques.length-1].raison=="Kms return Process-Error"){
     
       this.ISImportAbord_KMS=false;
     }
      }  )
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
      this.AllSF()
   
    }
  
    //this.ISImportAbord=false;
   this.consulterSfService.getSfByStatus(status.value).subscribe(res=>{
    this.shipmentFile=res as ShipmentFile[];
   })
   
  }
  RejecterSF(nameSf){
    this.consulterSfService.Reject_SF(nameSf).subscribe(
      res=>{
console.log(res);

  this.AllSF()
  this.pageChangeMeter()
  this.ReturnToList()

    })
  }
  ResumerSF(nameSf){
    this.consulterSfService.Resume_SF_Serv(nameSf).subscribe(
      res=>{
console.log(res.valueOf());

  this.AllSF()
  this.pageChangeMeter()
  this.ReturnToList()

    })
  }
 
}
