/* Angular doit savoir comment les éléments de votre application s’emboîtent 
et quels autres fichiers et bibliothèques l’application requiert.
 Cette information est appelée métadonnées */


import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'; /* importer les modules formulaires */

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component'; /*Le composant HeroesComponent est déclaré dans le tableau @NgModule.declarations. */


import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({  /* Certaines des métadonnées se trouvent dans les décorateurs 
  @Component  ajoutés aux classes de composants. 
  Les autres métadonnées critiques sont dans les décorateurs @NgModule. */

/* AppModule déclare les composants d’application, 
    AppComponent et HeroesComponent. */


  imports: [
    BrowserModule,
    FormsModule, /* import */
    AppRoutingModule
  ],
  declarations: [
    AppComponent, /* import */
    DashboardComponent,
    HeroesComponent, /* import */
    HeroDetailComponent,
    MessagesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
