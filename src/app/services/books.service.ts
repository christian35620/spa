import { Injectable } from "@angular/core";
import data from "../../assets/json/book-list.json";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  private Books: Book[] = data.results;

  constructor() {
    console.log("servicio listo para usar ");
  }

  getBooks() {
    return this.Books;
  }
}

export interface Book {
  amazon_product_url: string;
  asterisk: number;
  bestsellers_date: string;
  book_details: object;
  display_name: string;
  isbns: object[];
  list_name: string;
  published_date: string;
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
}
