import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
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
  @Input({ required: true}) verse!: {
    reference: string;
    text: string;
    id: string;
  };
  
  @Output() select = new EventEmitter();
  
  
    onSelectVerse() {
      this.select.emit(this.verse.id);
    }

//BELOW WAS CODE FOR SELECTING RANDOM VERSE FROM LIST. uSE THIS FOR TEST MODE LATER
  // selectedVerse = start_verses[randomIndex] without signals
 // switchVerse = signal(start_verses[randomIndex]); use with the switchVerse() method

//   onSwitchVerse() {
//     const randomIndex = Math.floor(Math.random() * start_verses.length);
//     this.selectedVerse.set(start_verses[randomIndex]);
// //    this.selectedVerse = start_verses[randomIndex] without signals
//   }

}