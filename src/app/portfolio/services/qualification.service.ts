import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { QualificationDTO } from '../interfaces/qualification';

@Injectable({
  providedIn: 'root',
})
export class QualificationService {
  works?: Observable<QualificationDTO[]>;
  educations?: Observable<QualificationDTO[]>;
  congresses?: Observable<QualificationDTO[]>;
  onlines?: Observable<QualificationDTO[]>;

  constructor(private firestore: AngularFirestore) {
    this.works = this.firestore
      .collection<QualificationDTO>('works', (ref) =>
        ref.orderBy('finish_year', 'desc')
      )
      .valueChanges();

    this.educations = this.firestore
      .collection<QualificationDTO>('educations', (ref) =>
        ref.orderBy('init_year', 'asc')
      )
      .valueChanges();

    this.congresses = this.firestore
      .collection<QualificationDTO>('congresses', (ref) =>
        ref.orderBy('init_year', 'desc')
      )
      .valueChanges();

    this.onlines = this.firestore
      .collection<QualificationDTO>('educations-online', (ref) =>
        ref.orderBy('finish_year', 'desc')
      )
      .valueChanges();
  }
}
