import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-education-item',
  imports: [ CommonModule],
  templateUrl: './education-item.html',
  styleUrl: './education-item.css',
})
export class EducationItem {
  @Input() titulo: string = '';
  @Input() institucion: string = '';
  @Input() periodo: string = '';
  @Input() retardo: number = 0;

  @ViewChild('escritor') escritor!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const longitud = this.titulo.length + 1;

    const elemento = this.escritor.nativeElement;

    elemento.style.setProperty('--caracteres', `${longitud}ch`);
    elemento.style.setProperty('--caracteres-step', `${longitud}`);
    elemento.style.setProperty('--retardo', `${this.retardo}s`);
  }
}
