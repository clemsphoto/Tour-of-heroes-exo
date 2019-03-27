import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({ /*toujours mettre un @ pour annoter la classe du component */
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  /* hero ='Windstorm'; */
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}