import { Component, HostListener, computed, input, signal } from '@angular/core';

export interface CarouselSlide {
  src?: string;
  alt: string;
}

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  readonly slides = input<CarouselSlide[]>([]);

  protected readonly activeIndex = signal(0);
  protected readonly lightboxOpen = signal(false);
  protected readonly hasMultipleSlides = computed(() => this.slides().length > 1);

  protected goTo(index: number): void {
    const total = this.slides().length;
    if (total === 0) {
      return;
    }
    this.activeIndex.set((index + total) % total);
  }

  protected next(): void {
    this.goTo(this.activeIndex() + 1);
  }

  protected prev(): void {
    this.goTo(this.activeIndex() - 1);
  }

  protected openLightbox(): void {
    if (this.slides().length === 0) {
      return;
    }
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  protected closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('window:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen()) {
      return;
    }
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }
}
