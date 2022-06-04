import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/books.model';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  livro: any;
  bookService : BooksService

  url : string = "";

  @Input()
  //livro!: Book;

  constructor(bookService : BooksService) {

    this.bookService = bookService;

   }

  ngOnInit(): void {

    this.livro = this.bookService.getBook().subscribe((data => {

      this.livro = data;
      console.log(this.livro);

    }))

  }

}
