import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  getTareas(){
    console.log(
      this.tService.getTareas().subscribe(
        res => {
          this.tService.tareasArray = res;
        },
        err => {
          console.log(err);
        }
      )
    );
  }

  addTarea(form: NgForm){
    this.tService.addTarea(form.value).subscribe(
      res => {
        this.getTareas();
        form.reset();
      },
      err => {
        console.log(err)
      }
    )
  }

}
