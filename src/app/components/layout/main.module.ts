import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutingModule } from "./main-routing.module";
import { RouterModule, RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MainRoutingModule,
      RouterModule
    ]
  })
  export class MainModule { } 