import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { AboutComponent } from "./components/about/about.component"
import { ContactComponent } from "./components/contact/contact.component"
import { BookListComponent } from "./components/book-list/book-list.component"
import { NatoursComponent } from "./components/natours/natours.component"
import { TrilloComponent } from "./components/trillo/trillo.component"
import { NexterComponent } from "./components/nexter/nexter.component"

const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "book-list",
		component: BookListComponent,
	},
	{
		path: "natours",
		component: NatoursComponent,
	},
	{
		path: "trillo",
		component: TrilloComponent,
	},
	{
		path: "nexter",
		component: NexterComponent,
	},
	{
		path: "about",
		component: AboutComponent,
	},
	{
		path: "contact",
		component: ContactComponent,
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "**",
		redirectTo: "home",
		pathMatch: "full",
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
