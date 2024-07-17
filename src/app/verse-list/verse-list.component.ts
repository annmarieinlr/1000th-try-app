import { Component, signal } from '@angular/core';
import { start_verses } from '../start-verses';

const randomIndex = Math.floor(Math.random() * start_verses.length);

@Component({
  selector: 'app-verse-list',
  standalone: true,
  imports: [],
  templateUrl: './verse-list.component.html',
  styleUrl: './verse-list.component.css'
})
export class VerseListComponent {
  // selectedVerse = start_verses[randomIndex]
  selectedVerse = signal(start_verses[randomIndex]);

  onSelectVerse() {
    const randomIndex = Math.floor(Math.random() * start_verses.length);
    this.selectedVerse.set(start_verses[randomIndex]);
//    this.selectedVerse = start_verses[randomIndex]
  }
}
