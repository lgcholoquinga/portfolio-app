import { Component } from '@angular/core';
import { QualificationDTO } from '../interfaces/qualification';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent {
  active = 1;

  educations: QualificationDTO[] = [
    {
      title: 'Scrum Master',
      subtitle: 'Ecuador - CertiProf',
      init_year: 2019,
      finish_year: 2019,
    },
    {
      title: 'Sofwtare Engineer',
      subtitle: 'Ecuador - University',
      init_year: 2014,
      finish_year: 2020,
    },
    {
      title: 'English Language Sufficiency',
      subtitle: 'Ecuador - University',
      init_year: 2015,
      finish_year: 2019,
      url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-b21bc.appspot.com/o/courses%2Fidiomas.jpeg?alt=media&token=acb8c57e-92ab-4d69-9eb7-0621511a4221',
    },
  ];

  works: QualificationDTO[] = [
    {
      title: 'Macro-Hard',
      subtitle: 'Ecuador - Quito',
      init_year: 2020,
      finish_year: 2021,
    },
    {
      title: 'Freelance Developer',
      subtitle: 'Ecuador - Latacunga',
      init_year: 2018,
      finish_year: 2020,
    },
  ];

  congresses: QualificationDTO[] = [
    {
      title: 'Scrum 360',
      subtitle: 'Ecuador - Kpacitec',
      init_year: 2019,
      finish_year: 2019,
    },
    {
      title: 'Scanner Operator CNE',
      subtitle: 'Ecuador - CNE',
      init_year: 2019,
      finish_year: 2019,
    },
    {
      title: 'Cloud Computing',
      subtitle: 'Ecuador - CIESS',
      init_year: 2018,
      finish_year: 2018,
    },
    {
      title: 'Software Engineering',
      subtitle: 'Ecuador - CIESS',
      init_year: 2018,
      finish_year: 2018,
    },
    {
      title: 'Science and Technology',
      subtitle: 'Ecuador - University',
      init_year: 2018,
      finish_year: 2018,
    },
    {
      title: 'Iberoamerican Conference',
      subtitle: 'Ecuador - University',
      init_year: 2017,
      finish_year: 2017,
    },

    {
      title: 'Entrepreneurship Conference',
      subtitle: 'Ecuador - University',
      init_year: 2015,
      finish_year: 2015,
    },
  ];

  onlineEducations: QualificationDTO[] = [
    {
      title: 'React JS Edition 2021',
      subtitle: 'Ecuador - Udemy',
      init_year: 2021,
      finish_year: 2021,
    },
    {
      title: 'Angular Edition 2021',
      subtitle: 'Ecuador - Udemy',
      init_year: 2021,
      finish_year: 2021,
    },
    {
      title: 'Angular with ASP.NET Core',
      subtitle: 'Ecuador - Udemy',
      init_year: 2021,
      finish_year: 2021,
    },
    {
      title: 'Blazor with ASP.NET Core',
      subtitle: 'Ecuador - Udemy',
      init_year: 2021,
      finish_year: 2021,
    },
    {
      title: 'Advanced Angular',
      subtitle: 'Ecuador - Udemy',
      init_year: 2020,
      finish_year: 2020,
    },
    {
      title: 'Blazor and .Net Core',
      subtitle: 'Ecuador - Udemy',
      init_year: 2020,
      finish_year: 2020,
    },
    {
      title: 'React with Redux',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },
    {
      title: 'Java SE Introduction',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },
    {
      title: 'Frontend Developer',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },
    {
      title: 'JavaScript',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },
    {
      title: 'Configuration of Development Environments',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },

    {
      title: 'JavaScript Basic',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },

    {
      title: 'React JS',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },

    {
      title: 'Python',
      subtitle: 'Ecuador - Platzi',
      init_year: 2020,
      finish_year: 2020,
    },

    {
      title: 'Online Web Development',
      subtitle: 'Ecuador - Platzi',
      init_year: 2019,
      finish_year: 2019,
    },

    {
      title: 'Css Grid Layout',
      subtitle: 'Ecuador - Platzi',
      init_year: 2019,
      finish_year: 2019,
    },

    {
      title: 'Responsive Design',
      subtitle: 'Ecuador - Platzi',
      init_year: 2019,
      finish_year: 2019,
    },

    {
      title: 'Html and Css',
      subtitle: 'Ecuador - Platzi',
      init_year: 2019,
      finish_year: 2019,
    },

    {
      title: 'Bootstrap',
      subtitle: 'Ecuador - Platzi',
      init_year: 2019,
      finish_year: 2019,
    },
  ];
}
