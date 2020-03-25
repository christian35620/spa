import { NgModule } from "@angular/core"
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { AboutComponent } from "./components/about/about.component"
import { ContactComponent } from "./components/contact/contact.component"
import { BookListComponent } from "./components/book-list/book-list.component"

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
        loadChildren: () => import("./components/natours/natours.module").then(m => m.NatoursModule),
    },
    {
        path: "trillo",
        loadChildren: () => import("./components/trillo/trillo.module").then(m => m.TrilloModule),
    },
    {
        path: "nexter",
        loadChildren: () => import("./components/nexter/nexter.module").then(m => m.NexterModule),
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
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
