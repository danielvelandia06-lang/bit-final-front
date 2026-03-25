import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tareas } from './tareas';
import { Tareasservice } from '../../../services/tareas';
import { of } from 'rxjs';

describe('Tareas', () => {
  let component: Tareas;
  let fixture: ComponentFixture<Tareas>;

  const mockService = {
    getAllTareas: () => of([{ titulo: 'Aprender Express', prioridad: 'alta', completada: false }]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tareas],
      providers: [{ provide: Tareasservice, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Tareas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show literal boolean value for completada', () => {
    const compiled = fixture.nativeElement;
    // Buscamos el texto 'false' que viene del mock
    expect(compiled.querySelector('.status-value').textContent).toContain('false');
  });
});
