import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicosTelService } from 'src/app/services/servicos-tel.service';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Guid } from 'guid-typescript'
import { contato } from 'src/app/models/contact.model';



@Component({
  selector: 'app-info-tel',
  templateUrl: './info-tel.page.html',
  styleUrls: ['./info-tel.page.scss'],
})
export class InfoTelPage implements OnInit {

  public selectTel: any
  public Exibmode = false
  public Editmode = false
  handlerMessage: string;

  public ionicForm: FormGroup
  public arraycontato:any

  tipoS:string
  private contato:contato



  constructor( private objTel: ServicosTelService,private route:ActivatedRoute,private AlertController:AlertController,private formBuilder:  FormBuilder,private seila : Router,private storage:Storage) {}



  async ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))

    if (id>0){
      this.selectTel = this.objTel.SelectIdTel(id)
    }else{
      this.selectTel = {
        id, nome:"",numero:""}
        this.Exibmode = true
        this.Editmode = true
      }

      this.arraycontato = {id:Guid.createEmpty(),name:"",sobrenome:"",email:"",numero:"",tipo:"" }

      this.ionicForm = this.formBuilder.group({

      'id':       [this.contato.id],
      'name':     [this.contato.name,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(15) ])],
      'sobrenome':[this.contato.sobrenome,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(15)])],
      'email':    [this.contato.email,Validators.compose([Validators.required,Validators.email])],
      'numero':   [this.contato.numero,Validators.compose([Validators.required])],
      'tipo':     [this.contato.tipo,Validators.compose([Validators.required])],
    })

    }








    startExib(){

      const id: number = Number(this.route.snapshot.paramMap.get('id'))

      if (id>0){
        this.selectTel = this.objTel.SelectIdTel(id)
        this.Exibmode = true
        this.Editmode=false

      } else{
        this.selectTel = {id , nome:"",valor:0.0}
        this.Exibmode = true
        this.Editmode = false



      }

        }


        enviar(){
          if(this.ionicForm.valid){
            this.objTel.insert(this.ionicForm.value)
          }
        }


        confirm(){
          const id: number = Number(this.route.snapshot.paramMap.get('id'))
            if (id>0){
            this.Exibmode = false
             this.Editmode = true
          }else{
              this.objTel.addTel(this.selectTel)
              this.Exibmode= false
              this.Editmode = true

          }




        }





        removeTel(){
          this.objTel.delldado(this.selectTel)


        }





        async presentAlert() {
          const alert = await this.AlertController.create({
            header: 'Atenção! Deseja realmente remover este contato? ',
            buttons: [
              {
                text: 'Não',
                role: 'cancel',
                handler: () => {
                  this.handlerMessage = 'q isso meu filho calma';
                },
              },
              {
                text: 'Sim',
                role: 'confirm',
                handler: () => {
                  this.seila.navigate(['/lista-tel'])
                  this.removeTel()

               },
              },
            ],
          });


        await alert.present();

        }










  }


