import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  sendEmail(e: Event) {
    debugger;
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rx26gib',
        'template_7um76ot',
        e.target as HTMLFormElement,
        'RM0rV9i0udSOY2fAB'
      )
      .then(
        () => {
          alert('Wiadomość wysłana!');
        },
        (error) => {
          alert('Błąd wysyłania: ' + JSON.stringify(error));
        }
      );
  }
}
