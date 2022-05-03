import { AllUser } from 'src/Models/AllUser';
import { Historique } from './Historique';
export class ShipmentFile{
    id?:string;
    name?:string;
    type_compteur?:string;
    status?:string;
    user:AllUser
    historiques?:Historique[]
    nbr_meters?:string;
    nbr_Resume?:string;
}