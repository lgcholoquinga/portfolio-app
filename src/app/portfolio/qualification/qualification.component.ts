import { Component, OnInit } from '@angular/core';
import { QualificationDTO } from '../interfaces/qualification';
import { QualificationService } from '../services/qualification.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {
  active = 1;

  educations: QualificationDTO[] = [];

  works: QualificationDTO[] = [];

  congresses: QualificationDTO[] = [];

  onlineEducations: QualificationDTO[] = [];

  constructor(private service: QualificationService) {}

  ngOnInit(): void {
    this.service.works?.subscribe((data) => {
      this.works = data;
    });

    this.service.educations?.subscribe((data) => {
      this.educations = data;
    });

    this.service.congresses?.subscribe((data) => {
      this.congresses = data;
    });

    this.service.onlines?.subscribe((data) => {
      this.onlineEducations = data;
    });
  }
}
