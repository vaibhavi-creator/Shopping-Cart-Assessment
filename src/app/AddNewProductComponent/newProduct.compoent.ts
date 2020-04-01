import { Component } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "new-product",
  templateUrl: "newProduct.component.html",
  styleUrls: ["newProduct.component.css"]
})
export class NewProductComponent {
  ProductAdded: boolean;
  constructor(private _productService: ProductService) {
    this.ProductAdded = false;
  }
  AddNewProduct() {
    let productNameInput = document.getElementById(
      "ProductName"
    ) as HTMLInputElement;
    let productName = productNameInput.value;
    let option = document.getElementById(
      "newProductDropdown"
    ) as HTMLSelectElement;
    let selectedOption = option.options[option.selectedIndex].text;
    this._productService.productData.push({
      value: selectedOption,
      name: productName
    });
    this.ProductAdded = true;
  }
}
