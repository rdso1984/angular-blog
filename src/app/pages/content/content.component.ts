import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("Id")))
  }
}
