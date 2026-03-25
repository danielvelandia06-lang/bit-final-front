import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tareasservice } from '../../../services/tareas'; // Ruta corregida

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {
  private api = inject(Tareasservice);
  private cdr = inject(ChangeDetectorRef);
  misTareas: any[] = [];

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.api.getAllTareas().subscribe({
      next: (res: any) => {
        this.misTareas = res.tareas || res.data || (Array.isArray(res) ? res : []);

        // ESTO ES CLAVE: Mira la consola (F12) y abre el primer objeto { } que aparezca
        console.log('Estructura de una tarea:', this.misTareas[0]);

        this.cdr.detectChanges();
      },
    });
  }
}
