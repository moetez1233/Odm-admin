import { ApprovalService } from './../../../../Service/approval.service';
import { ConfigParamInfo } from './../../../../Models/ConfigParamInfo';
import { HistoMeter } from './../../../../Models/ShipmentFileINfo/HistMeter';
import { MetersGaz } from './../../../../Models/MetersGaz';
import { Meters } from './../../../../Models/Meters';
import { Historique } from './../../../../Models/ShipmentFileINfo/Historique';
import { ShipmentFile } from './../../../../Models/ShipmentFileINfo/ShipementFile';
import { ConsulterSfService } from './consulter-sf.service';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { Router } from '@angular/router';
@Component({
  selector: 'app-consulter-sf',
  templateUrl: './consulter-sf.component.html',
  styleUrls: ['./consulter-sf.component.scss']
})
export class ConsulterSfComponent implements OnInit {
shipmentFile:ShipmentFile[]
meters:any

requestIdMeter=""
nbrRetryMeter=""
configParamInfo:ConfigParamInfo[];
HitoriqueMeter:HistoMeter[]
HitoriqueMeterRetry:HistoMeter[]
showHistorique=false
Show_Cahnnel=false
msg_nbr_Resume=""
historiques:Historique[]
historiquesInitialNbrRetry:Historique[]
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
showSearch=true
map: L.Map;
markers: L.LayerGroup;
window = window;
ShowMapDetail=false

search: string = '';
  constructor(
    private consulterSfService:ConsulterSfService,
    private route:Router,
    private approvalService: ApprovalService,
    ) { }

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
  SfSearch(){
    console.log(this.search);
    if(this.search.length>0){
      this.consulterSfService.GetSearchSf(this.search).subscribe(res=>{
        this.shipmentFile=res as ShipmentFile[];
      })
    }else this.AllSF()
   
    
  }
  pageChange(){
    this.consulterSfService.getAllSf(this.page).subscribe( (res)=>{
      console.log(res);
      
     this.shipmentFile=res as ShipmentFile[];
      console.log(this.shipmentFile[0]);
   
      
      }  )
   
  }
  ShipmentFileClicked(index){
   this.showSearch=false
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
  for(let i=0;i<this.meters.length;i++){
  
    
    this.consulterSfService.historiqueMeter(this.clickedSf.name,this.meters[i].mrid).subscribe(
      res=>{
        this.HitoriqueMeterRetry=res as HistoMeter[]
        //this.requestIdMeter=this.HitoriqueMeterRetry[2].requestID
        this.meters[i].nbrRetry=this.HitoriqueMeterRetry[this.HitoriqueMeterRetry.length-1].nbrRetry;
        
      }
    )
  }
console.log(this.meters);

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
console.log(this.meters);
for(let i=0;i<this.meters.length;i++){

  this.consulterSfService.historiqueMeter(this.clickedSf.name,this.meters[i].mrid).subscribe(
    res=>{
      this.HitoriqueMeterRetry=res as HistoMeter[]
    
      this.meters[i].nbrRetry=this.HitoriqueMeterRetry[this.HitoriqueMeterRetry.length-1].nbrRetry;
      
    }
  )
}

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
    this.showSearch=true
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
    console.log(status.value);
    
    if(status.value=="tous"){
      this.AllSF()
   
    }
  
    //this.ISImportAbord=false;
   this.consulterSfService.getSfByStatus(status.value).subscribe(res=>{
    this.shipmentFile=res as ShipmentFile[];
   })
   
  }
  GetSfByType(type){

    
    this.consulterSfService.GetSFByType(type.value).subscribe(res=>{
      console.log(res);
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
  ShowHistoMeter(exampleModalCenter,mrid){
    exampleModalCenter.show()
  this.GetHistoriqueMeter(mrid);
  }
  ShowConfgInParam(exampleConfigParam,mrid){
    console.log(this.clickedSf.name,mrid);
    
    exampleConfigParam.show()
    this.consulterSfService.getConfigParam(this.clickedSf.name,mrid).subscribe(
      res=>{
        this.configParamInfo=res as ConfigParamInfo[]
        console.log(this.configParamInfo);
        
      }
    )
  }
   GetHistoriqueMeter(mrid){
    this.consulterSfService.historiqueMeter(this.clickedSf.name,mrid).subscribe(
      res=>{
        this.HitoriqueMeter=res as HistoMeter[]
        //this.requestIdMeter=this.HitoriqueMeter[2].requestID
        console.log(this.HitoriqueMeter);
        
      }
    )
  }
  GetMetrActivationFailed(choisType,Sfname){
    if(choisType.value=="Activation_Failed"){
    this.consulterSfService.getMetes_Failed(Sfname).subscribe(res=>{
      if(Sfname.startsWith("AMM")) this.meters=res as Meters[]
      else this.meters=res as MetersGaz[]
    })
  }else {
      if(Sfname.startsWith("AMM")){
      
        this.MetersSf(Sfname,1)
        
      
      }
      else {
        this.MeterGazSF(Sfname,1)
     
      }
    }
  }
  ShowMap(exampleConfigParam1,index){
    const data={
      meter:this.meters[index],
      Lant:this.meters[index].latitude,
      Long:this.meters[index].longitude

    }
    this.approvalService.updateApprovalMessage(data)
   this.route.navigateByUrl("/dashboard/MapMeters")
    //this.initMap(this.meters[index].latitude,this.meters[index].longitude)
  }
  RetryMeterFailed(mrid){
    this.consulterSfService.historiqueMeter(this.clickedSf.name,mrid).subscribe(
      res=>{
        this.HitoriqueMeter=res as HistoMeter[]
        this.requestIdMeter=this.HitoriqueMeter[this.HitoriqueMeter.length-1].requestID
        this.nbrRetryMeter=this.HitoriqueMeter[this.HitoriqueMeter.length-1].nbrRetry;
        console.log(this.requestIdMeter);
        console.log(this.clickedSf.name);
        this.consulterSfService.RetryMeter(this.clickedSf.name,mrid,this.requestIdMeter).subscribe(
         
          (res)=>{

            //this.ShowDetails=false;
            console.log(this.clickedSf.name+','+this.page);
            
            if(this.clickedSf.name.startsWith("AMM")) this.MetersSf(this.clickedSf.name,this.page)
            else this.MeterGazSF(this.clickedSf.name,this.page)
         
          },
          (error)=>{
            //this.ShowDetails=false;
            if(this.clickedSf.name.startsWith("AMM")) this.MetersSf(this.clickedSf.name,this.page)
            else this.MeterGazSF(this.clickedSf.name,this.page)
          }
          
          
        )
        
       
      }
      
    )

  }
}
