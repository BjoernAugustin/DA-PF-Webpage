import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ResponsiveService } from '../services/responsive.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

constructor(public navigation: NavigationService, public responsive: ResponsiveService) {}

}
