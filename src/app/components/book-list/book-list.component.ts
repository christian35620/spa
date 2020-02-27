import { Component, OnInit } from "@angular/core";
import { BooksService, Book } from "src/app/services/books.service";

@Component({
	selector: "app-book-list",
	templateUrl: "./book-list.component.html",
	styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
	books: Book[] = [];

	constructor(private _booksService: BooksService) {
		this.books = this._booksService.getBooks();
		console.log(this.books);
	}

	getCurrencyColor(value: number) {
		if (value > 10 && value <= 20) {
			return "SearchResultListItem-dollarAmount yellow-price";
		} else if (value > 20) {
			return "SearchResultListItem-dollarAmount red-price";
		} else {
			return "SearchResultListItem-dollarAmount black";
		}
	}

	gotoAmazon(value: string) {
		window.open(value, "_blank");
	}

	ngOnInit(): void {}
}
