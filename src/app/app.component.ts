/* le code de la classe du composant, écrit en TypeScript. */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes'; /* 1- changement du titre */
}
