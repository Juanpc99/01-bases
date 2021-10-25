import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 150000
        },
        {
          nombre: 'Vegetta',
          poder: 14000
        }
      ];
      get personaje(): Personaje[]{
          return [...this._personajes];
      }
    constructor(){
    }

    agregarPersonaje(personje: Personaje){
        this._personajes.push(personje);
    }

}