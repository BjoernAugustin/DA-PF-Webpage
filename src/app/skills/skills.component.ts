import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { MailService } from '../services/mail.service';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(public translate: TranslationService, public mailservice: MailService, public data: DataService) {}

  hover = false;

}
