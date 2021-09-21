import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SkillDTO } from '../interfaces/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skills_frontend?: Observable<SkillDTO[]>;
  skills_database?: Observable<SkillDTO[]>;
  skills_backend?: Observable<SkillDTO[]>;

  constructor(private firestore: AngularFirestore) {
    this.skills_frontend = this.firestore
      .collection<SkillDTO>('skills-frontend')
      .valueChanges();

    this.skills_database = this.firestore
      .collection<SkillDTO>('skills-database')
      .valueChanges();

    this.skills_backend = this.firestore
      .collection<SkillDTO>('skills-backend')
      .valueChanges();
  }
}
