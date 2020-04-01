import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService.isAllProductSelected = true;
    this._productService.isCarProductSelected = false;
    this._productService.isBikeProductSelected = false;
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
}
