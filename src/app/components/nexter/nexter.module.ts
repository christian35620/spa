import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { NexterRoutingModule } from "./nexter-routing.module"
import { NexterComponent } from "./nexter.component"

@NgModule({
    declarations: [NexterComponent],
    imports: [CommonModule, NexterRoutingModule],
})
export class NexterModule {}
