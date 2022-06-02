import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
books: Book;
id: number;
  constructor(private bookService: BookService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((param) => {
      this.id = + param.get('id');
      this.getBookId(this.id);
    });
  }

  getBookId(id) {
    this.bookService.findById(this.id).subscribe((data) => {
      this.books = data;
    }, (error) => {
    });
  }

  ngOnInit() {
  }
}
