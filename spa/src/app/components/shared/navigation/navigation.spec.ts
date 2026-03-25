import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importante
import { Navigation } from './navigation';

describe('Navigation', () => {
  let component: Navigation;
  let fixture: ComponentFixture<Navigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos el módulo de pruebas de rutas para que reconozca routerLink
      imports: [Navigation, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ejecuta el ciclo de vida inicial
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
