import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { NexterComponent } from "./nexter.component"

const routes: Routes = [
    {
        path: "",
        component: NexterComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NexterRoutingModule {}
