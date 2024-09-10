import { Component, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { ResponsiveService } from '../services/responsive.service';
import { MailService } from '../services/mail.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent {

  http = inject(HttpClient);

  checkboxChecked = false;
  checkboxHovered = false;
  privacyPolicyErrorMsg = false;
  submitted = true;
  mailTest = true;

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  constructor(
    public translate: TranslationService,
    public mailservice: MailService,
    public responsive: ResponsiveService
  ) { }

  setCheckbox() {
    this.checkboxChecked = !this.checkboxChecked;
    this.privacyPolicyErrorMsg = false;
  }
 

  post = {
    endPoint: 'https://bjoerni.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            /*Fenster erscheint "Vielen Dank"*/
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
    }
  }

}
