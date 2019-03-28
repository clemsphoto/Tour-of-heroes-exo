/*  Créer Des Faux Héros */

/* Créez un fichier appelé mock-heroes.ts dans le dossier src / app /.
 Définissez une constante HEROES comme un tableau de dix héros et exportez-la. 
 Le fichier devrait ressembler à ceci. */



import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 1, name: 'Olymphe' },
  { id: 2, name: 'Morphé' },
  { id: 3, name: 'Hermes' },
  { id: 4, name: 'Zeus' },
  { id: 5, name: 'Athéna' },
  { id: 6, name: 'Poséidon' },
  { id: 7, name: 'Apollon' },
  { id: 8, name: 'Hades' },
  { id: 9, name: 'Athena' },
  { id: 10, name: 'Persé' }
];

/* on affiche la liste des héros en haut de la composante Héros HeroesComponent.ts */