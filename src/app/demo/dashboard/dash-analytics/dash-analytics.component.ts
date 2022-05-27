import { GazDashMeter } from './../../../../Models/GazDashMeter';
import { Dash_Sf_Gaz } from './../../../../Models/Dash_Sf_Gaz';
import { DahSf_Elec } from './../../../../Models/DahSf_Elec';
import { DashAnalyticsService } from './dash-analytics.service';
import { Component, OnInit } from '@angular/core';
import { ChartDB } from '../../../fack-db/chart-data';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import { DashMeterElec } from 'src/Models/DashMeterElec';

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;
  meteDashElec:DashMeterElec=new DashMeterElec();
  meterDash_Gaz:GazDashMeter=new GazDashMeter();
  sf_Dash_Elec:DahSf_Elec=new DahSf_Elec();
  Sf_dash_Gaz:Dash_Sf_Gaz=new Dash_Sf_Gaz();

  constructor(public apexEvent: ApexChartService,private dhashService:DashAnalyticsService) {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66
      }, {
        type: 'primary',
        value: 26
      }, {
        type: 'danger',
        value: 8
      }
    ];
  }

  ngOnInit() {
    this.GetDashSF_Elec()
    this.GetDhabordInfo()
    this.GetDashMeteGaz()
    this.GetDashSF_Gaz()
  }
  GetDhabordInfo(){
    this.dhashService.Dash_Info().subscribe(
      
res=>{
  this.meteDashElec=res  as DashMeterElec;
  console.log(res);
}
      
    )
  }
  GetDashMeteGaz(){
    this.dhashService.Dash_InfoMeteGaz().subscribe(res=>{
      console.log(res);
      this.meterDash_Gaz=res as GazDashMeter;
      //this.MeteDashElec=res
    })
  }
  GetDashSF_Elec(){
    this.dhashService.Dash_InfoSFElec().subscribe(res=>{
      console.log(res);
      this.sf_Dash_Elec=res as DahSf_Elec ;
    })
  }
  GetDashSF_Gaz(){
    this.dhashService.Dash_InfoSFGAz().subscribe(res=>{
      console.log(res);
      this.Sf_dash_Gaz=res as Dash_Sf_Gaz;
    })
  }

}
