import { Component } from '@angular/core';
import { SidebarButton } from "../sidebar-button/sidebar-button";

@Component({
  selector: 'app-sidebar',
  imports: [SidebarButton],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

}
