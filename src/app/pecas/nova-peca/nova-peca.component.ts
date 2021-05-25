import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-nova-peca',
  templateUrl: './nova-peca.component.html',
  styleUrls: ['./nova-peca.component.css']
})
export class NovaPecaComponent implements OnInit {

  codigo : string = ''
  descricao : string = ''
  quantidade : number = 0
  capacidade : number = 0
  quantidadeMin : number = 0
  preco : number = 0
  loja : string = ''

  constructor(
    private pecaService : PecaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form : any){
    this.codigo = form.value.codigo
    this.descricao = form.value.descricao
    this.quantidade = Number(form.value.quantidade)
    this.capacidade = Number(form.value.capacidade)
    this.quantidadeMin = Number(form.value.quantidadeMin)
    this.preco = Number(form.value.preco)
    this.loja = form.valu.loja
    this.pecaService.addPeca(this.codigo, this.descricao, this.quantidade, this.capacidade, this.quantidadeMin, this.preco, this.loja)

    this.router.navigate([''])
  }

}
