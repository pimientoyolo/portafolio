import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.html',
  styleUrl: './project-item.css',
})
export class ProjectItem {
  @Input() githubUrl: string = '';
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() retardo: number = 0;
  @Input() iconos: string[] = [];

  @ViewChild('escritor') escritor!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const longitud = this.titulo.length + 1;

    const elemento = this.escritor.nativeElement;

    elemento.style.setProperty('--caracteres', `${longitud}ch`);
    elemento.style.setProperty('--caracteres-step', `${longitud}`);
    elemento.style.setProperty('--retardo', `${this.retardo}s`);
  }
}
