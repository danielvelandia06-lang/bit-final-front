import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Navigation],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  fontSize: number = 100;

  constructor() {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  changeFontSize(action: 'increase' | 'decrease'): void {
    const step = 10;
    const max = 150;
    const min = 70;

    if (action === 'increase' && this.fontSize < max) {
      this.fontSize += step;
    } else if (action === 'decrease' && this.fontSize > min) {
      this.fontSize -= step;
    }

    document.documentElement.style.fontSize = `${this.fontSize}%`;
  }

  toggleDarkMode(): void {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
