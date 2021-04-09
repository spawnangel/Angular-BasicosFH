import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  //Inicializo el listado de heroes que es un arreglo de strings
  heroes: string[] = ['Spiderman', 'Iroman','Hulk','Thor'];
  heroeBorrado:string = '';

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() ||'';
    this.heroeBorrado = heroeBorrado;

  }
}

