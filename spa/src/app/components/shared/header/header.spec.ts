import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Necesario para Navigation
import { Header } from './header';
import { Navigation } from '../navigation/navigation';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importamos Header, su dependencia Navigation y el módulo de rutas
      imports: [Header, Navigation, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges(); // detectChanges es más directo que whenStable para componentes síncronos
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default fontSize 100', () => {
    expect(component.fontSize).toBe(100);
  });

  it('should increase font size but not exceed 150', () => {
    component.fontSize = 145;
    component.changeFontSize('increase');
    expect(component.fontSize).toBe(150);
    component.changeFontSize('increase');
    expect(component.fontSize).toBe(150); // No debe subir de 150
  });
});
