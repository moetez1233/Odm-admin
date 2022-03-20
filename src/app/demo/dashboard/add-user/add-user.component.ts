import { HttpClient } from '@angular/common/http';
import { roles } from './../../../../Models/roles';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUserService } from './add-user.service';
import { data } from 'jquery';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  AddForm:FormGroup
  ListRolesCheked=[]
  ListRolesChekedFinale=[]
  listOBjetRole=[]
  FirstPush=false
  checkboxesDataList = [
   
    {
      name: 'Navigation',
      roles:['Dashbord','Ajouter SF'],
      
      
    },
    {
      name: 'Administrateur',
      roles:['ajouter_users','consulter_users']
      
    },
    {
      name: 'Consulter',
      roles:['Consulter Etat SF','Consulter Status SF']
      
    }
  ]


  constructor(private formBuilder: FormBuilder, private http?: HttpClient,private addUserService?:AddUserService) { }  

  ngOnInit() {
    console.log("length "+this.checkboxesDataList[0].roles);
    
    
    
    

    this.AddForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      adress: ['', Validators.required],
      phone_number: ['', Validators.required],
      cin:['',Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      roles:['',Validators.required]

      
      
    });
  }
 async addAdmin(){
    if(!this.AddForm.invalid){
      const name=""
      for(let i=0;i<this.ListRolesChekedFinale.length;i++){
        this.listOBjetRole.push({name:this.ListRolesChekedFinale[i]})
      }
    
     
    this.AddForm.value.roles= this.listOBjetRole
    /*this.addUserService.AddUser(this.AddForm.value).subscribe(res=>{
      console.log(res);
      
    })*/
console.log(this.AddForm.value);

    this.addUserService.createNewAdmin(this.AddForm.value).subscribe((res:any)=>{
      console.log(res);
    })
    
    
     
      
    }
  }
 
  roleClick(rolTypeIndex,rolIndex){
    const role=this.checkboxesDataList[rolTypeIndex].roles[rolIndex]
    var checkrol= document.getElementById(role) as HTMLInputElement;
    if(checkrol.checked){
      this.listRole(role) 
    }else{
      this.deletRole(role)
    }

  }
  listRole(role){
    
    if(!this.ListRolesChekedFinale.includes(role)){
this.ListRolesChekedFinale.push(role)
    }
    //console.log(this.ListRolesChekedFinale);
    
  }
  deletRole(role){
    this.ListRolesChekedFinale.splice(this.ListRolesChekedFinale.indexOf(role),1)
    //console.log(this.ListRolesChekedFinale);
    
  }
}
