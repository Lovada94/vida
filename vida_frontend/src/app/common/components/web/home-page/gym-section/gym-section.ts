import { Component } from '@angular/core';
import { Carousel, CarouselSlide } from '../../../carousel/carousel';

@Component({
  selector: 'app-gym-section',
  imports: [Carousel],
  templateUrl: './gym-section.html',
  styleUrl: './gym-section.css'
})
export class GymSection {
  protected readonly slides: CarouselSlide[] = [
    { alt: 'Sala de musculación' },
    { alt: 'Zona de cardio' },
    { alt: 'Entrenamiento personal' },
    { alt: 'Clases dirigidas' }
  ];
}
