import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }
  getAllBook() {
    this.bookService.getAll().subscribe((data) => {
      this.books = data;
    }, (error) => {
    });
  }
}
