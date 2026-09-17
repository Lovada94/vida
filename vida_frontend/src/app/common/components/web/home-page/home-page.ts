import { Component } from '@angular/core';
import { ServicesIntro } from './services-intro/services-intro';
import { GymSection } from './gym-section/gym-section';
import { PhysioSection } from './physio-section/physio-section';

@Component({
  selector: 'app-home-page',
  imports: [ServicesIntro, GymSection, PhysioSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {}
