import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-button.html',
  styleUrl: './sidebar-button.css',
})
export class SidebarButton {
  @Input() texto: string = "Inicio";
  @Input() ruta: string = "/";

  constructor(
    private router: Router
  ){}

  navegar(){
    this.router.navigate([this.ruta]);
  }

}
