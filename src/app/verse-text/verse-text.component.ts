import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verse-text',
  standalone: true,
  imports: [],
  templateUrl: './verse-text.component.html',
  styleUrl: './verse-text.component.css'
})
export class VerseTextComponent {
  @Input() text: string | undefined;
}
