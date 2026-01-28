import { Component } from '@angular/core';
import { EducationItem } from '../../core/components/education-item/education-item';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationItem],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {

}
