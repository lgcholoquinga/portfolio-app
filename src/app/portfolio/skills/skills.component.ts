import { Component, OnInit } from '@angular/core';
import { CardSkill, SkillDTO } from '../interfaces/skill';
import { SkillService } from '../services/skill.service';

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
  public skillsFrontend: SkillDTO[] = [];

  public skillsBackend: SkillDTO[] = [];

  public skillsDatabase: SkillDTO[] = [];
  constructor(private service: SkillService) {}

  ngOnInit(): void {
    this.service.skills_frontend?.subscribe((skills) => {
      this.skillsFrontend = skills;
    });

    this.service.skills_database?.subscribe((skills) => {
      this.skillsDatabase = skills;
    });

    this.service.skills_backend?.subscribe((skills) => {
      this.skillsBackend = skills;
    });
  }

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
