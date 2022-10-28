import { Component, OnInit } from '@angular/core';
import { ServicosTelService } from 'src/app/services/servicos-tel.service';

@Component({
  selector: 'app-lista-tel',
  templateUrl: './lista-tel.page.html',
  styleUrls: ['./lista-tel.page.scss'],
})
export class ListaTelPage implements OnInit {
  public telList:any
  constructor(private objTel:ServicosTelService) { }

  ngOnInit() {
    this.telList = this.objTel.exibTel()
  }



  spin(){
    window.location.href ='https://c.tenor.com/SkIay46KUkIAAAAC/duck-meme.gif'


}

}
