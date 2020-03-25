import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { TrilloRoutingModule } from "./trillo-routing.module"
import { TrilloComponent } from "./trillo.component"

@NgModule({
    declarations: [TrilloComponent],
    imports: [CommonModule, TrilloRoutingModule],
})
export class TrilloModule {}
