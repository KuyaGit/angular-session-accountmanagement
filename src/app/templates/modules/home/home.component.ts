import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { navbarData } from './navbarData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  navbarItems = navbarData;
}
