import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  bookForm: FormGroup = new  FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number;
  constructor(private bookService: BookService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = + paramMap.get('id');
      this.getBookId(this.id);
    });
  }

  ngOnInit() {
  }

  get idControl() {
    return this.bookForm.get('id');
  }
  getBookId(id) {
    this.bookService.findById(id).subscribe((book: Book) => {
      this.bookForm = new FormGroup({
        id: new FormControl(),
        title: new FormControl(book.title, [Validators.required]),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }
  delete() {
    this.bookService.delete(this.id).subscribe(() => {
    });
    this.router.navigateByUrl('/');
  }

}
