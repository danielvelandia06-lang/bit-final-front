import { Component, inject, OnInit } from '@angular/core';
import { Tareasservice } from '../../../services/tareas';

@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {
  private tareaservice = inject(Tareasservice);
  tareas: any[] = [];

  ngOnInit(): void {
    this.tareaservice.getAllTareas().subscribe((res: any) => {
      this.tareas = res.data;
      console.log('tareas:', this.tareas);
    });
  }
}
