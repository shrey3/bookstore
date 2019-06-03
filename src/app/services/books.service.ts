import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../home-page/books.model';

const book_service = "http://localhost:8080/books/allbooks"

@Injectable()
export class BooksService {

  constructor(private http : HttpClient) { }

  getBooks(): Observable<Books[]> {
    //return books from service
    return this.http.get<Books[]>(book_service + "/books/allbooks");
  }

}
