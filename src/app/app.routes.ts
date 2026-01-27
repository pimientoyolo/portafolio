import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Skills } from './pages/skills/skills';
import { Education } from './pages/education/education';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'experience', component: Experience },
      { path: 'education', component: Education },
      { path: 'skills', component: Skills },
      { path: 'projects', component: Projects },
    ],
  },
];
