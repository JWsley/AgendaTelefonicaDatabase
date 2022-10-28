import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';


import { contato } from '../models/contact.model';

import { Guid } from 'guid-typescript'

@Injectable({
  providedIn: 'root'
})
export class ServicosTelService {
  [x: string]: any;


  public telContacts = [
    {id:1,nome:"Rodolfo",sobrenome:'Figereto',tipo:'casa', email:'rodolfoFigereto@gmail.com',   numero:'+55 9 9873-4230'},
    {id:2,nome:"Angela",sobrenome:'Airfryier',tipo:'trabalho', email:'AngelaAirFryer@gmail.com',   numero:'+11 9 9485-7421'},
    {id:3,nome:"Bruce",sobrenome:'Lee',       tipo:'celular', email:'BruceLee@gmail.com',   numero:'+11 9 9888-4240'},
  ]


  constructor(private storage:Storage) {}

  exibTel(){
    return this.telContacts
  }


  SelectIdTel(id:number){

    const telSelected = this.telContacts.filter(tel => tel.id === id)
    var telsct = telSelected[0]
    return telsct

  }

  addTel( dadosRecebidos: any){
    dadosRecebidos.id = this.telContacts.length+1
    this.telContacts.push(dadosRecebidos)

  }


  delldado(dadosRecebidos: any){

    this.telContacts.splice(this.telContacts.indexOf(dadosRecebidos),1)


}

insert(argumento:contato){

  argumento.id = Guid.create()
  this.storage.set(argumento.id.toString(),JSON.stringify(argumento))

}

}
