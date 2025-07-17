import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookReviewComponent } from './book-review/book-review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookReviewComponent],
  template: '<app-book-review></app-book-review>',
})
export class AppComponent {}
