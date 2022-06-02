import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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
      this.id = +paramMap.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit() {
  }
  get idControl() {
    return this.bookForm.get('id');
  }

  getBookById(id) {
    this.bookService.findById(this.id).subscribe((book: Book) => {
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title, [Validators.required]),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }
  update() {
    this.bookService.update(this.idControl.value, this.bookForm.value).subscribe(() => {
    });
    this.router.navigateByUrl('/');
  }
}
