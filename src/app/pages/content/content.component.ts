import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = 'https://res.cloudinary.com/nerd-club/image/upload/c_thumb,dpr_2.0,f_auto,h_1000,q_auto:good,w_1400/avengers-poster.jpg'
  contentTitle:string = 'MINHA NOTICIA'
  contentDescription:string = 'Ola mundo'

  constructor() {}
}
