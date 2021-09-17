import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardSkill } from '../../interfaces/skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent {
  @Input() skillInfo!: CardSkill;
  @Input() toggle = true;
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter();

  public onClick() {
    this.toggle = !this.toggle;
    this.onToggle.emit(this.toggle);
  }
}
