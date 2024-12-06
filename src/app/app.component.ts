import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    CardModule,
    CommonModule, // Para diretivas como *ngIf e *ngFor
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Correção aqui: de styleUrl para styleUrls
})
export class AppComponent {
  title = 'frontend';
}
