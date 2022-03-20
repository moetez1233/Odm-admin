import { roles } from "./roles";
import {Token} from './Token'
export class UserResp{
    
    userId?:string;
    name?:string;
    adress?:string;
    cin?:string;
    phone_number?:string;
    email?:string;
    roles:roles[];

    
}