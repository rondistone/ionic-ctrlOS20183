import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import {ClienteService} from '../cliente.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  private cliente: Cliente;

  constructor(private clienteService:ClienteService,
              public alertController: AlertController ) { }

  ngOnInit() {
    this.cliente = new Cliente;
  }

  onSubmit(form){
    console.log(form);
    this.clienteService.save(this.cliente)
    .then(
      res=>{
        this.presentAlert("Aviso", this.cliente.nome + "cadastrado");
      },
      err=>{
        this.presentAlert("deu ruim","erro ao cadastrar!" + err);
      }
    );
  }
  async presentAlert(titulo:string,texto:string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }
}
