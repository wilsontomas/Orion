import { Injectable } from '@angular/core';
import { IAddress, IClient } from '../models/clientModel';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
  clientKey:string = 'clientData';
  addressKey:string = 'addressData'

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

  addClientAddress(clientCode:number,address:string){
    let newId = this.genId();
    let data = JSON.stringify( [...this.getAddressList(),{
       id:newId, info:address, clientId:clientCode
     }]);
 
     localStorage.setItem(this.addressKey,data)
  }

  
  getAddressList():IAddress[]{
    let data:IAddress[]=[];
    let dataRaw = localStorage.getItem(this.addressKey);
    
    if(dataRaw){
      data = JSON.parse(dataRaw ?? '') as IAddress[];
    }
    return data;
  }

  getAddressListById(clientCode:number):IAddress[]{
   let dd = this.getAddressList().filter((x)=>x.clientId===clientCode);
   return dd;
  }
 
}
