import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiencie-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencie-item.html',
  styleUrl: './experiencie-item.css',
})
export class ExperiencieItem {
  @Input() titulo: string = '';
  @Input() empresa: string = '';
  @Input() periodo: string = '';
  @Input() descripcion: string = '';
  @Input() retardo: number = 0;
  @Input() iconos: string[] = []

  @ViewChild("escritor") escritor!: ElementRef<HTMLElement>

  ngAfterViewInit(){

    const longitud = this.titulo.length + 1

    const elemento = this.escritor.nativeElement;

    elemento.style.setProperty('--caracteres', `${longitud}ch`);
    elemento.style.setProperty('--caracteres-step', `${longitud}`);
    elemento.style.setProperty('--retardo', `${this.retardo}s`);
  }
}
