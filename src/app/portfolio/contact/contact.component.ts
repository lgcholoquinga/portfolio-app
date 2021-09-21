import { Component } from '@angular/core';
import { ContactDTO } from '../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contacts: ContactDTO[] = [
    {
      title: 'Call Me',
      subtitle: '(+593) 0987846972',
      icon: 'fas fa-phone-square-alt',
    },
    {
      title: 'Email',
      subtitle: 'luisg.choloquinga@gmail.com',
      icon: 'fas fa-envelope-square',
    },
    {
      title: 'Location',
      subtitle: 'Ecuador - Latacunga',
      icon: 'fas fa-street-view',
    },
  ];
}
