import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-h3-typing-skill-item',
  imports: [],
  templateUrl: './h3-typing-skill-item.html',
  styleUrl: './h3-typing-skill-item.css',
})
export class H3TypingSkillItem {
  @Input() texto: string = '';
  @Input() retardo: number = 0;

  @ViewChild('escritor') escritor!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const longitud = this.texto.length + 1;

    const elemento = this.escritor.nativeElement;

    elemento.style.setProperty('--caracteres', `${longitud}ch`);
    elemento.style.setProperty('--caracteres-step', `${longitud}`);
    elemento.style.setProperty('--retardo', `${this.retardo}s`);
  }
}
