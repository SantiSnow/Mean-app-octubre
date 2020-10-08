import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarea } from 'src/app/models/tarea';
import { TareasService } from '../../services/tareas.service';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor(public tService: TareasService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getTareas(){
    this.tService.getTareas().subscribe(
      res => {
        this.tService.tareasArray = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  addTarea(form: NgForm){
    if(form.value._id){
      this.tService.updateTarea(form.value).subscribe(
        res =>{
          this.getTareas();
          form.reset();
        },
        err =>{
          console.log(err);
        }
      );
    }
    else{
      this.tService.addTarea(form.value).subscribe(
        res => {
          this.getTareas();
          form.reset();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  deleteTarea(id: string){
    if(("¿Desea eliminar la tarea?")){
      this.tService.deleteTarea(id).subscribe(
        (res)=>{
          this.getTareas();
        },
        (err)=>{
          console.log(err);
        }
      );
    }
  }

  editaTarea(tarea: Tarea){
    this.tService.nuevaTarea = tarea;
  }

}
