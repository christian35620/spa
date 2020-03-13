import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BoldPipe } from "./pipes/bold.pipe";
import { ToMBPipe } from "./pipes/to-mb.pipe";
import { NatoursComponent } from './components/natours/natours.component';
import { TrilloComponent } from './components/trillo/trillo.component';
import { NexterComponent } from './components/nexter/nexter.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		NavbarComponent,
		AboutComponent,
		ContactComponent,
		BookListComponent,
		BoldPipe,
		ToMBPipe,
		NatoursComponent,
		TrilloComponent,
		NexterComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
