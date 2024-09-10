import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { SliderCarouselComponent } from '../slider-carousel/slider-carousel.component';
import { DetailOverlayComponent } from '../projects/detail-overlay/detail-overlay.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { AtfComponent } from '../atf/atf.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AtfComponent, AboutComponent, SkillsComponent, ProjectsComponent, DetailOverlayComponent, SliderCarouselComponent, ContactformComponent, FooterComponent, PrivacyPolicyComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
