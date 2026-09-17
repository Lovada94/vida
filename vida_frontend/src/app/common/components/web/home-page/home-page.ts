import { Component } from '@angular/core';
import { ServicesIntro } from './services-intro/services-intro';
import { GymSection } from './gym-section/gym-section';
import { PhysioSection } from './physio-section/physio-section';
import { ContactSection } from './contact-section/contact-section';

@Component({
  selector: 'app-home-page',
  imports: [ServicesIntro, GymSection, PhysioSection, ContactSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {}
