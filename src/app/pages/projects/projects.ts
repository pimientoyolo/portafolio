import { Component } from '@angular/core';
import { ProjectItem } from '../../core/components/project-item/project-item';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItem],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

}
