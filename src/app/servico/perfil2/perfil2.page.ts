import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico';
import { ServicoService } from '../servico.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.page.html',
  styleUrls: ['./perfil2.page.scss'],
})
export class Perfil2Page implements OnInit {

  private servico: Servico;
  private id: string = null;

  constructor(

    private servicoService:ServicoService,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.servico = new Servico;
    this.servicoService.get(this.activeRouter.snapshot.paramMap.get("id"))
    if (this.id){
      this.servicoService.get(this.id)
    .subscribe(
      res => {
        this.servico = res;
        //if (!this.servico.foto){
          //this.servico.foto = "assets/perfils.jpg";
        //}
      },
      err => {
        console.log(err);
      })
    
}
   
  }
}
