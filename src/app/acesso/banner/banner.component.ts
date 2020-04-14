import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Imagem } from '../../shared/imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public imagens: Array<Imagem> = [
    { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  public logicaRotacao(): void {

    // Auxilia na exibisção da imagem seguinte
    let idx: number;

    for (let i = 0; i < this.imagens.length; i++){
      if (this.imagens[i].estado === 'visivel'){
        this.imagens[i].estado = 'escondido';

        idx = i === (this.imagens.length - 1) ? 0 : ++i;

        break;
      }
    }

    // Exibir a próxima imagem
    this.imagens[idx].estado = 'visivel';

    setTimeout(() => this.logicaRotacao(), 3000);
  }

}
