import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private cliente:Cliente;
  private id: string = null;

  constructor(

    private clienteService:ClienteService,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.cliente = new Cliente;
    this.clienteService.get(this.activeRouter.snapshot.paramMap.get("id"))
    if (this.id){
      this.clienteService.get(this.id)
    .subscribe(
      res => {
        this.cliente = res;
        //if (!this.cliente.foto){
          //this.cliente.foto = "assets/perfil.jpg";
        //}
      },
      err => {
        console.log(err);
      })
    
}
   
  }
}
