import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillContentComponent } from './components/skill-content/skill-content.component';
import { AboutComponent } from './about/about.component';
import { QualificationComponent } from './qualification/qualification.component';
import { QualificationCardComponent } from './components/qualification-card/qualification-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    SkillsComponent,
    ContactComponent,
    SkillCardComponent,
    SkillContentComponent,
    AboutComponent,
    QualificationComponent,
    QualificationCardComponent,
    ProjectsComponent,
    ProjectsCardComponent,
    ContactInfoComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [
    SkillsComponent,
    SkillCardComponent,
    SkillContentComponent,
    AboutComponent,
    QualificationComponent,
    ProjectsComponent,
    ContactComponent,
  ],
})
export class PortfolioModule {}
