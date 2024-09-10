import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { TranslationService } from '../services/translation.service';
import { ResponsiveService } from '../services/responsive.service';
import { CommonModule } from '@angular/common';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { MenuService } from '../services/menu.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, PortalModule, OverlayModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor (public translate: TranslationService, public responsive: ResponsiveService, public menu: MenuService, public navigation: NavigationService) {}

}
