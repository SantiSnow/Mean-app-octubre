import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url = "http://localhost/3000";

  constructor() { }

  getTareas(){
    return [];
  }
}
