import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NewProductComponent } from "./AddNewProductComponent/newProduct.compoent";
import { HomeComponent } from "./HomeComponent/home.component";
import { CartProductComponent } from "./CartProductsComponent/cartProduct.component";
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "newProduct",
    component: NewProductComponent
  },
  {
    path: "finalCart",
    component: CartProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
