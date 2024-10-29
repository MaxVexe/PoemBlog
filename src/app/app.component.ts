import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PoemComponent } from './component/poem/poem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PoemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-name';
}
