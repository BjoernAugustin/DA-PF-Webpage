import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  goToRef(ref: string) {
    window.location.href = ref;
  }

  goToUrl(url: string) {
    window.open(url);
  }
}
