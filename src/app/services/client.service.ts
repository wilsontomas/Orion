import { Injectable } from '@angular/core';
import { IClient } from '../models/clientModel';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
  clientKey:string = 'clientData';

  addClient(){
   let data = JSON.stringify( [{
      id:1, name:'wilson', phone:'example'
    },...this.getClientList()]);

    localStorage.setItem(this.clientKey,data)
  }

  getClientList():IClient[]{
    let data:IClient[]=[];
    let dataRaw = localStorage.getItem(this.clientKey);
    
    if(dataRaw){
      data = JSON.parse(dataRaw ?? '') as IClient[];
    }
    
    
    return data;
  }
}
