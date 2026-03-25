import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Necesario para tests con API
import { Tareasservice } from './tareas'; // Cambiado de Tareas a Tareasservice

describe('Tareasservice', () => {
  let service: Tareasservice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importamos esto para que no falle al pedir HttpClient
      providers: [Tareasservice],
    });
    service = TestBed.inject(Tareasservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
