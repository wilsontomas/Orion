import { Injectable } from '@angular/core';
import { IClient } from '../models/clientModel';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
  clientKey:string = 'clientData';

  genId():number{
    let date =new Date();
    return (date.getMilliseconds()+date.getSeconds());
  }
  addClient(client:string){
    let newId = this.genId();
   let data = JSON.stringify( [...this.getClientList(),{
      id:newId, name:client, action:newId
    }]);

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
