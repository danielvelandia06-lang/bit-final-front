import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Tareasservice {
  private httpclient = inject(HttpClient);
  private url = 'http://localhost:3000/tareas';

  getAllTareas() {
    return this.httpclient.get(this.url);
  }
}
