  import { Injectable } from '@angular/core';
  import {environment} from '../../environments/environment';
  import {HttpClient} from '@angular/common/http';
  import {Book} from '../model/book';
  import {Observable} from 'rxjs';


  const API_URL = `${environment.apiUrl}`;
  @Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient ) { }

    getAll(): Observable<Book[]> {
      return this.http.get<Book[]>(`${API_URL}/books`);
    }
    view(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
    }

    create(data): Observable<Book> {
      return this.http.post(`${API_URL}/books`, data);
    }

    update(id, data): Observable<Book> {
      return this.http.put(`${API_URL}/books/${id}`, data);
    }

    findById(id): Observable<Book> {
      return this.http.get<Book>(`${API_URL}/books/${id}`);
    }
    delete(id): Observable<Book> {
      return this.http.delete(`${API_URL}/books/${id}`);
    }
}
