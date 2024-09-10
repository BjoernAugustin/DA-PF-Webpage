import { Component, ViewChild } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { ProjectOverlayService } from '../services/project-overlay.service';
import { ResponsiveService } from '../services/responsive.service';
import { DetailOverlayComponent } from './detail-overlay/detail-overlay.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DetailOverlayComponent, PortalModule, OverlayModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(public translate: TranslationService, public data: DataService, private overlay: Overlay, public projectOverlay: ProjectOverlayService, public responsive: ResponsiveService) {}

  @ViewChild(CdkPortal) portal!: CdkPortal;

  openModal() {
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    })

    this.projectOverlay.overlayRef = this.overlay.create(config);
    this.projectOverlay.overlayRef.attach(this.portal);
    this.projectOverlay.overlayRef.backdropClick().subscribe(() => this.projectOverlay.overlayRef.detach());
}

}
