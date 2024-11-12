import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  books: any[] = [];
  searchTerm: string = '';

  constructor(private bookService: BookService) {}

  search() {
    if (this.searchTerm.trim()) {
      this.bookService.searchBooks(this.searchTerm).subscribe(
        (data) => {
          this.books = data.items;
        },
        (error) => {
          console.error('Error fetching books', error);
        }
      );
    }
  }
}
