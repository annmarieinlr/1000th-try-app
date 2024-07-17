import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { VerseListComponent } from "./verse-list/verse-list.component";
import { start_verses } from './start-verses';
import { VerseTextComponent } from "./verse-text/verse-text.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, VerseListComponent, VerseTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1000th-try-app';
  verses = start_verses;
  selectedVerseId = 'u1';
  

  get selectedVerse(){
    return this.verses.find((verse) => verse.id === this.selectedVerseId)!;
  }

  onGetVerse(id: string){
    this.selectedVerseId = id;
  }
}
