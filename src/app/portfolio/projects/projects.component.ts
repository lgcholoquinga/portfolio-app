import { Component, OnInit } from '@angular/core';
import { ProjectsDTO } from '../interfaces/projects';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: ProjectsDTO[] = [];

  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.service.projects?.subscribe((data) => {
      this.projects = data;
    });
  }
}
