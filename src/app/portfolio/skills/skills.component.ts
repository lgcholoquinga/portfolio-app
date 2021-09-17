import { Component, OnInit } from '@angular/core';
import { CardSkill, SkillDTO } from '../interfaces/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public skillInfo: CardSkill[] = [
    {
      title: 'Frontend Developer',
      experience: 'More than 2 years.',
      icon: 'far fa-file-code',
      action: 'frontend',
    },
    {
      title: 'Backend Developer',
      experience: 'More than 2 years.',
      icon: 'fas fa-server',
      action: 'backend',
    },
    {
      title: 'Databases',
      experience: 'More than 2 years.',
      icon: 'fas fa-database',
      action: 'database',
    },
  ];
  public skillsFrontend: SkillDTO[] = [
    {
      title: 'React',
      percentage: 85,
    },
    {
      title: 'Angular',
      percentage: 85,
    },
    {
      title: 'Blazor',
      percentage: 85,
    },
    {
      title: 'JavaScrit',
      percentage: 85,
    },
    {
      title: 'Css',
      percentage: 90,
    },
  ];

  public skillsBackend: SkillDTO[] = [
    {
      title: 'ASP.NET Core Web API',
      percentage: 80,
    },
    {
      title: 'ASP.NET Core Web App',
      percentage: 80,
    },
    {
      title: 'Node JS',
      percentage: 60,
    },
  ];

  public skillsDatabase: SkillDTO[] = [
    {
      title: 'Sql Server',
      percentage: 80,
    },
    {
      title: 'Msql',
      percentage: 80,
    },
    {
      title: 'Postgresql',
      percentage: 75,
    },
    {
      title: 'Firebase',
      percentage: 60,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleFrontend(value: boolean) {
    this.isCollapsed = value;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
  }

  toggleBackend(value: boolean) {
    this.isCollapsed2 = value;
    this.isCollapsed = true;
    this.isCollapsed3 = true;
  }

  toggleDatabases(value: boolean) {
    this.isCollapsed3 = value;
    this.isCollapsed = true;
    this.isCollapsed2 = true;
  }
}
