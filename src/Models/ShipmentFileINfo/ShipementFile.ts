import { AllUser } from 'src/Models/AllUser';
import { Historique } from './Historique';
export class ShipmentFile{
    name?:string;
    type_compteur?:string;
    status?:string;
    user:AllUser
    historiques?:Historique[]
}