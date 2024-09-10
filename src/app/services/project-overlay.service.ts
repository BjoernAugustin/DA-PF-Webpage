import { Overlay } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectOverlayService {

  constructor(private overlay: Overlay, public data: DataService) { }

  overlayRef: any = "";

  close() {
    this.overlayRef.detach();
  }

  nextProject() {
    this.data.projectIndex++;
    this.data.projectIndex = this.data.projectIndex % this.data.projects.length;
  }

  hoverClose = false;
}
