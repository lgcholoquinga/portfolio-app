import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillContentComponent } from './components/skill-content/skill-content.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    SkillsComponent,
    ContactComponent,
    SkillCardComponent,
    SkillContentComponent,
    AboutComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    SkillsComponent,
    SkillCardComponent,
    SkillContentComponent,
    AboutComponent,
  ],
})
export class PortfolioModule {}
