import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url = "http://localhost:3000/";
  tareasArray: Tarea[];

  constructor(private http: HttpClient) { }

  getTareas(){
    return this.http.get<Tarea[]>(this.url);
  }
}
