import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { NavigationService } from '../services/navigation.service';
import { MailService } from '../services/mail.service';
import { HeaderComponent } from '../header/header.component';
import { MarqueeComponent } from "./marquee/marquee.component";
import { ResponsiveService } from '../services/responsive.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MarqueeComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  constructor (public translate: TranslationService, public navigation: NavigationService, public mailservice: MailService, public responsive: ResponsiveService) {}

}
