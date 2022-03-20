import { Injectable ,EventEmitter,Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharDashDataService {
@Output() static eventEmitter=new EventEmitter();
  constructor() { }
  static setData(data){
    return this.eventEmitter.emit(data)
  }
  static getData(){
    return this.eventEmitter
  }
}
