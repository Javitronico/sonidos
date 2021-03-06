import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ANIMALES} from "../../app/data/data.animales"

import { Animal } from "../../interfaces/animal.interface"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = [];

  constructor() {
    
    this.animales = ANIMALES.splice(0);

  }

  reproducir ( animal:Animal ){

      console.log ( animal );

      let audio = new Audio();
      audio.src = animal.audio;

      audio.load();
      audio.play();

      animal.reproduciendo = true;

      setTimeout(() => {
        animal.reproduciendo = false 
      }, animal.duracion * 1000 );


  }

}
