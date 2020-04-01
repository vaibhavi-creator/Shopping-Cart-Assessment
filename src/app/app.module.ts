import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { CarProductComponent } from "./carProductComponent/carProduct.component";
import { BikeProductComponent } from "./bikeProductComponent/bikeProduct.component";
import { NewProductComponent } from "./AddNewProductComponent/newProduct.compoent";
import { HomeComponent } from "./HomeComponent/home.component";
import { CartProductComponent } from "./CartProductsComponent/cartProduct.component";

import { ProductService } from "./product.service";

@NgModule({
  declarations: [
    AppComponent,
    CarProductComponent,
    BikeProductComponent,
    NewProductComponent,
    CartProductComponent,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
