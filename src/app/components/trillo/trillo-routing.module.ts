import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { TrilloComponent } from "./trillo.component"

const routes: Routes = [
    {
        path: "",
        component: TrilloComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TrilloRoutingModule {}
