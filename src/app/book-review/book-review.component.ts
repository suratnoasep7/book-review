import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-review.component.html',
  styleUrl: './book-review.component.css',
})
export class BookReviewComponent {
  books = [
    {
      name: 'The Great Gatsby',
      year: 1925,
      imageUrl: 'https://placehold.co/200x280/4CAF50/FFFFFF?text=Gatsby',
      reviews: [
        { email: 'alice@example.com', note: 'Timeless classic!', stars: 5 },
        { email: 'bob@example.com', note: 'Beautiful writing style.', stars: 4 },
      ]
    },
    {
      name: '1984',
      year: 1949,
      imageUrl: 'https://placehold.co/200x280/2196F3/FFFFFF?text=1984',
      reviews: [
        { email: 'charlie@example.com', note: 'Chilling but brilliant.', stars: 5 }
      ]
    }
  ];

  selectedBook = this.books[0];

  newBook = {
    name: '',
    year: new Date().getFullYear(),
    imageUrl: '',
    reviews: [] as { email: string, note: string, stars: number }[]
  };

  review = { email: '', note: '', stars: 0 };
  hoverStar = 0;

  addBook() {
    if (!this.newBook.name.trim() || this.newBook.year <= 0) return;
    const book = {
      name: this.newBook.name.trim(),
      year: this.newBook.year,
      imageUrl: this.newBook.imageUrl.trim() || 'https://placehold.co/200x280?text=No+Image',
      reviews: []
    };
    this.books.push(book);
    this.selectedBook = book;
    this.newBook = { name: '', year: new Date().getFullYear(), imageUrl: '', reviews: [] };
  }

  addReview() {
    if (!this.review.email.trim() || !this.review.note.trim() || this.review.stars === 0) return;
    this.selectedBook.reviews.push({ ...this.review });
    this.review = { email: '', note: '', stars: 0 };
    this.hoverStar = 0;
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://placehold.co/200x280?text=No+Image';
  }

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
