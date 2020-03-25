import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { NatoursComponent } from "./natours.component"

const routes: Routes = [
    {
        path: "",
        component: NatoursComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NatoursRoutingModule {}
