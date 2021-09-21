import { Component, Input } from '@angular/core';
import { ContactDTO } from '../../interfaces/contact';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent {
  @Input() contact!: ContactDTO;
}
