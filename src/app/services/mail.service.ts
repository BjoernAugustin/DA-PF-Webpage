import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  mailSubject:string = "I like to get in contact"

  myEmail:string = 'b.augustin@hotmail.com';

  sendEmail(myEmail: string, subject: string, body: string) {
    let mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
}
