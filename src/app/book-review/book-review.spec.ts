import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReview } from './book-review';

describe('BookReview', () => {
  let component: BookReview;
  let fixture: ComponentFixture<BookReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
