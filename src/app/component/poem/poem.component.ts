import { Component } from '@angular/core';

@Component({
  selector: 'app-poemlist',
  standalone: true,
  imports: [],
  templateUrl: './poem.component.html',
  styleUrl: './poem.component.css'
})
export class PoemComponent {
  viewPoem(): void {
    console.log('View Poem button clicked!');
  }
}
