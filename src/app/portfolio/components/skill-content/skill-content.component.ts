import { Component, Input, OnInit } from '@angular/core';
import { SkillDTO } from '../../interfaces/skill';

@Component({
  selector: 'app-skill-content',
  templateUrl: './skill-content.component.html',
  styleUrls: ['./skill-content.component.scss'],
})
export class SkillContentComponent {
  @Input() isCollapsed = true;
  @Input() color = 'success';
  @Input() skills: SkillDTO[] = [];
}
