import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Book} from "./Product-list/model/Book";
import { HttpHeaders } from "@angular/common/http";

@Injectable()

export class BooksService
{
  private url = "http://localhost:4200/api/BookStroy";

  httpOptions= {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private htpp:HttpClient){}

  getBook(){
    return this.htpp.get(this.url)
  }
}
