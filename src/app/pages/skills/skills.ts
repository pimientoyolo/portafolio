import { Component } from '@angular/core';
import { H3TypingSkillItem } from '../../core/components/h3-typing-skill-item/h3-typing-skill-item';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [H3TypingSkillItem],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

}
