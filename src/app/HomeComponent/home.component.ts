import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
@Component({
  selector: "all-products",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  isCartAdded: boolean;
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.isCartAdded = false;
    this._productService.finalCartProducts = [];
    this._productService.CartProducts = [];
  }
  DropDownOptionChnaged() {
    let option = document.getElementById(
      "productDropdown"
    ) as HTMLSelectElement;
    let selectedOption = option.options[option.selectedIndex].text;
    switch (selectedOption) {
      case "Cars": {
        this._productService.isAllProductSelected = false;
        this._productService.isCarProductSelected = true;
        this._productService.isBikeProductSelected = false;
        break;
      }
      case "Bikes": {
        this._productService.isAllProductSelected = false;
        this._productService.isCarProductSelected = false;
        this._productService.isBikeProductSelected = true;
        break;
      }
      default: {
        this._productService.isAllProductSelected = true;
        this._productService.isCarProductSelected = false;
        this._productService.isBikeProductSelected = false;
        break;
      }
    }
  }
  AddToCart() {
    this._productService.finalCartProducts = this._productService.CartProducts;
    this.isCartAdded = true;
  }
}
