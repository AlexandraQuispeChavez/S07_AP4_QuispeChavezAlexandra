import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent {
  verSeries() {
    alert('🎶 ¡Bienvenido a KWave Stream! Explora todo el contenido K-pop');
  }
}