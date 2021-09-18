import { Component, Input, OnInit } from '@angular/core';
import { QualificationDTO } from '../../interfaces/qualification';

@Component({
  selector: 'app-qualification-card',
  templateUrl: './qualification-card.component.html',
  styleUrls: ['./qualification-card.component.scss'],
})
export class QualificationCardComponent implements OnInit {
  @Input() qualifications: QualificationDTO[] = [];
  constructor() {}

  ngOnInit(): void {}
}
