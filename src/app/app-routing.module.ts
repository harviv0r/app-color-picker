import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsColorsComponent } from './basics-colors/basics-colors.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HexColorsComponent } from './hex-colors/hex-colors.component';

const routes: Routes = [
  {
    path: "basic-color",
    component: BasicsColorsComponent
  },
  {
    path: "hex-color",
    component: HexColorsComponent
  },
  {
    path: "color-picker",
    component: ColorPickerComponent
  },
  {
    path: "",
    redirectTo: "basic-color",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "basic-color",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
