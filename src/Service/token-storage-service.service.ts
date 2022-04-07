import { Injectable } from '@angular/core';

const Token_Key='tokenUser';
const Role_User='Roles';
const Email_User='Email_User'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {

  constructor() { }

  public SaveToken(token:string){
    window.sessionStorage.removeItem(Token_Key);
    window.sessionStorage.setItem(Token_Key,token);
  }


  public getToken():string{
    return sessionStorage.getItem(Token_Key);
  }
public SaveRoles(rolesUser){
  window.sessionStorage.removeItem(Role_User);
  window.sessionStorage.setItem(Role_User,rolesUser)
}

public getRolesUser():string{
  return window.sessionStorage.getItem(Role_User);
}

public saveEmailUser(email:string){
  window.sessionStorage.removeItem(Email_User);
  window.sessionStorage.setItem(Email_User,email)
}
public GetEmailUser():string{
  return window.sessionStorage.getItem(Email_User);
}
}
