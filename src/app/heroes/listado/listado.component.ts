import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[]= ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Vision'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
    console.log(heroeBorrado);
  }
  }
  


