import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor() {
    this.width640 = window.innerWidth < 640;
    this.width900 = window.innerWidth < 900;
    this.width1200 = window.innerWidth < 1200;
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  private checkScreenSize() {
    this.width640 = window.innerWidth < 640;
    this.width900 = window.innerWidth < 900;
    this.width1200 = window.innerWidth < 1200;
  }

  width640 = false;
  width900 = false;
  width1200 = false;
}
