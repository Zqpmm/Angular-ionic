import { Injectable } from '@angular/core';
import { Peca } from './peca';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  private pecas: Peca[]

  constructor() {
    this.pecas = [
      new Peca("1", "Embreagem", 65, 12, 10,59.00, "Extrema, Pouso Alegre, São Paulo, Cambuí"),
      new Peca("2", "Volante", 23, 18, 3,145.99, "Extrema, Pouso Alegre, São Paulo, Cambuí"),
      new Peca("3", "Pneu", 12, 14, 21,27.00, "Extrema, Pouso Alegre, São Paulo, Cambuí"),
      new Peca("4", "Farol", 15, 12, 60,7.00, "Extrema, Pouso Alegre, São Paulo"),      
      new Peca("5", "Amortecedor", 26, 29, 12,10.99, "Extrema, Pouso Alegre, Cambuí"),
      new Peca("6", "Retrovisor", 25, 21, 18,12.00, "Extrema, Pouso Alegre, São Paulo"),
      new Peca("7", "Motor", 28, 12, 23,12.50, "Extrema, Pouso Alegre, Cambuí"),      
      new Peca("8", "Roda", 34, 18, 55,15.00, "Extrema, Pouso Alegre, Cambuí")
    ]
  }

  
  public get getPecas() : Peca[] {
    this.ordenar(this.pecas)
    return this.pecas
  }

  public getPeca(cod: string){
    for(let peca of this.pecas){
      if(peca.getCod == cod){
        return peca
      }
    }
    return undefined
  }

  
  public atualizaQuantidadePeca(cod: string, quantidade : number) {
    for(let peca of this.pecas){
      if(peca.getCod == cod){
        peca.setQuantidade = quantidade
      }
    }
  }

  public addPeca(cod : string, desc : string, quantidade : number, capacidade : number, quantidadeMin : number, preco : number, loja : string){
    this.pecas.push(new Peca(cod,desc,quantidade,quantidadeMin,capacidade,preco,loja))
  }

  private ordenar(arr: Peca[]){
    arr.sort((a, b) => (
      a.getQuantidadeDisponivel/a.getQuantidadeMinima < 
      b.getQuantidadeDisponivel/b.getQuantidadeMinima) ? -1 : 1);
  }
  
  
}
