import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProjectsDTO } from '../interfaces/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects?: Observable<ProjectsDTO[]>;

  constructor(private firestore: AngularFirestore) {
    this.projects = this.firestore
      .collection<ProjectsDTO>('projects', (ref) => ref.orderBy('year', 'desc'))
      .valueChanges();
  }
}
