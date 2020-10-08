import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url = "http://localhost:3000/";
  tareasArray: Tarea[];
  nuevaTarea: Tarea = {
    nombre: '',
    descripcion: '',
    importancia: '',
    completada: false
  };

  constructor(private http: HttpClient) { }

  getTareas(){
    return this.http.get<Tarea[]>(this.url);
  }

  addTarea(tarea: Tarea){
    return this.http.post(this.url, tarea);
  }

  updateTarea(tarea: Tarea){
    return this.http.put(this.url + tarea._id, tarea);
  }

  deleteTarea(id: string){
    return this.http.delete(this.url + id);
  }
}
