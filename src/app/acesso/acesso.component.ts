import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          transform: 'translate(-50px, 0)',
          opacity: 0
        }),
        animate('500ms 0s ease-in-out') // duração, delay e aceleração
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          transform: 'translate(50px, 0)',
          opacity: 0
        }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner = 'criado';
  public estadoCadastro = 'criado';
  public cadastro = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false;
  }

}
