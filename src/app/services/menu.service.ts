import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  open = false;

closeMenu() {
  setTimeout(() => {
    this.open = false;
  }, 500)
}
}
