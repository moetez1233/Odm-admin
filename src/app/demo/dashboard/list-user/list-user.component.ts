import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AllUser } from 'src/Models/AllUser';
import{ListUserService}from './list-user.service'
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  AddForm:FormGroup
  adminsColor = []
  roleUser:string[]=[]
  newcheckboxesDataList:string[]=[]
  UpdateConfirmed=false
  showAlert=true
  adminIndex = false;
  alertType=''
  alertMessage=''
  updateUser=false;
  ClickedUserRoles=[]
  listOBjetRole=[]
  ListRolesChekedFinale=[]
  checked=false
  indexListRole=-1
  indexChaqRole=-1
  checkboxesDataList = [
   
    {
      name: 'Navigation',
      roles:[{checked : false,val:'Dashbord'},{checked : false,val:'Ajouter_SF'}],
      
      
    },
    {
      name: 'Administrateur',
      roles:[{checked : false,val:'ajouter_users'},{checked : false,val:'consulter_users'}]
      
    },
    {
      name: 'Consulter',
      roles:[{checked : false,val:'Consulter_SF'},{checked : false,val:'Operation_UAA'}]
      
    }
  ]

  

  constructor(private formBuilder: FormBuilder,private listUserService:ListUserService) { }
allUser:AllUser[]
clickedAdmin: AllUser = new AllUser();
  ngOnInit() {
    this.AddForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      adress: ['', Validators.required],
      phone_number: ['', Validators.required],
      cin:['',Validators.required],
      email: ['', Validators.required],
      
      roles:['',Validators.required]

      
      
    });
    
    this.listUser()
  }


/* ========================== list user =============================== */
listUser(){
  this.listUserService.listUser().subscribe((res)=>{
    //console.log("result is "+res);
    this.allUser=res as AllUser[]
  })

}
hoverOn(adminIndex) {
  if (adminIndex !== this.adminIndex)
    this.adminsColor[adminIndex] = "dark"
}

hoverOff(adminIndex) {
  if (adminIndex === this.adminIndex) {
    this.adminsColor[adminIndex] = "primary"
  } else {
    this.adminsColor[adminIndex] = "light"
  }
}
/* ========================== list user =============================== */

/* ========================== if user clicked affiche information  =============================== */

adminClicked(index) {

  
  this.UpdateConfirmed=false
this.showAlert=false
  this.adminIndex=false;
  this.adminsColor.fill('light');
  this.adminsColor[index] = "primary"
  this.clickedAdmin = this.allUser[index];

  console.log(this.roleUser);
 
  this.updateUser=false
this.roleUser=[]
for(let i=0;i<this.clickedAdmin.roles.length;i++){
  this.roleUser.push(this.clickedAdmin.roles[i].name);
    }
for(let i=0;i<this.checkboxesDataList.length;i++){
  // console.log(this.checkboxesDataList[i].roles);
   for(let j=0;j<this.checkboxesDataList[i].roles.length;j++){
     console.log(this.checkboxesDataList[i].roles[j].val);
     this.checkboxesDataList[i].roles[j].checked=false

     if(this.roleUser.includes(this.checkboxesDataList[i].roles[j].val)){
       this.checkboxesDataList[i].roles[j].checked=true
       this.ListRolesChekedFinale.push(this.checkboxesDataList[i].roles[j].val)
     }
     
     
   }
   
 }
 this.ValueUserClieckd()

}
ValueUserClieckd(){
  this.AddForm.patchValue({
    name:this.clickedAdmin.name,
    lastName:this.clickedAdmin.lastName,
    adress:this.clickedAdmin.adress,
    phone_number:this.clickedAdmin.phone_number,
    cin:this.clickedAdmin.cin,
    email:this.clickedAdmin.email
  
  })
  console.log(this.AddForm.value);
  
}
/* ========================== end  if user clicked affiche information  =============================== */



    /* =============================================== update User ==================== */

  Update(){
   
    this.alertMessage=`Vous devez choisi l'utilisateur qui tu veux mettre à jours`
    this.alertType="warning"
    this.UpdateConfirmed=true;
    this.adminIndex=true;
this.updateUser=true

  
  }
  roleClick(rolTypeIndex,rolIndex){
    
    this.checkboxesDataList[rolTypeIndex].roles[rolIndex].checked=!this.checkboxesDataList[rolTypeIndex].roles[rolIndex].checked
  }
  Confirmer(){
    this.listOBjetRole=[]
    if(this.AddForm.value){
     // console.log(this.AddForm.value);
      this.UpdateConfirmed=false;
      for(let i=0;i<this.checkboxesDataList.length;i++){
        // console.log(this.checkboxesDataList[i].roles);
         for(let j=0;j<this.checkboxesDataList[i].roles.length;j++){
        
           if(this.checkboxesDataList[i].roles[j].checked){
      
             this.listOBjetRole.push({name:this.checkboxesDataList[i].roles[j].val})
             
           }
         }}
         this.AddForm.value.roles= this.listOBjetRole
    //console.log( this.AddForm.value);
    this.listUserService.UpdateUser(this.AddForm.value).subscribe(res=>{
      //console.log(res);
     // this.allUser=res as AllUser[]
  this.listUser()
      this.showAlert=true
      this.alertMessage=`L'utilisateur est mis à jour`
      this.alertType="success"
      
    })
    
    }
  
  }
  

  /* =============================================== end update User ==================== */
  Supprimer(){
    console.log(this.clickedAdmin.email);
    
    this.UpdateConfirmed=true;
    this.adminIndex=true;
this.updateUser=true
if(confirm('êtes-vous sûr de supprimer cet utilisateur')==true){
  this.listUserService.DeleteUser(this.clickedAdmin.email).subscribe(
    res=>{
      
      this.listUser()
      this.showAlert=true
      this.alertMessage=`L'utilisateur : ${this.clickedAdmin.lastName} est supprimer avec succés`
      this.alertType="success"
      console.log("delete success")
    }
  )
}
    //alert(this.clickedAdmin.email)
  }
  
}
