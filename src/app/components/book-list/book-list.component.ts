import { Component, OnInit, ViewEncapsulation } from "@angular/core"
import { BooksService, Book } from "src/app/services/books.service"

@Component({
    selector: "app-book-list",
    templateUrl: "./book-list.component.html",
    styleUrls: ["./book-list.component.scss"],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class BookListComponent implements OnInit {
    books: Book[] = []

    constructor(private _booksService: BooksService) {
        this.books = this._booksService.getBooks()
        console.log(this.books)
    }

    getCurrencyColor(value: number) {
        if (value > 10 && value <= 20) {
            return "yellow-price"
        } else if (value > 20) {
            return "red-price"
        } else {
            return "black"
        }
    }

    ngOnInit(): void {}
}
