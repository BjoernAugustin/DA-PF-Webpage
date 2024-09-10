import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { NavigationService } from '../../services/navigation.service';
import { ProjectOverlayService } from '../../services/project-overlay.service';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-detail-overlay',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './detail-overlay.component.html',
  styleUrl: './detail-overlay.component.scss'
})
export class DetailOverlayComponent {

  constructor(public translate: TranslationService, public data: DataService, public navigation: NavigationService, public projectOverlay: ProjectOverlayService, public responsive: ResponsiveService) {}
}
