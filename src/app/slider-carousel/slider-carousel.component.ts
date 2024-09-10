import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesService } from '../services/slides.service';
import { ResponsiveService } from '../services/responsive.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-slider-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-carousel.component.html',
  styleUrls: ['./slider-carousel.component.scss']
})
export class SliderCarouselComponent {

  constructor(public slides: SlidesService, public responsive: ResponsiveService, public translate: TranslationService) {}

}
