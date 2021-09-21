import { Component, Input } from '@angular/core';
import { ProjectsDTO } from '../interfaces/projects';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss'],
})
export class ProjectsCardComponent {
  @Input() projects: ProjectsDTO[] = [];
}
