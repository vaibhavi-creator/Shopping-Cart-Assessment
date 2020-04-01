import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "product-bike",
  templateUrl: "bikeProduct.component.html",
  styleUrls: ["bikeProduct.component.css"]
})
export class BikeProductComponent implements OnInit {
  constructor(private _productService: ProductService) {}
  bikeProducts: { value: string; name: string }[];
  ngOnInit() {
    this.bikeProducts = this._productService.productData.filter(
      x => x.value === "Bikes"
    );
  }
  test(value: any, id: any) {
    let ischeckedOption = document.getElementById(
      "bike" + id
    ) as HTMLInputElement;
    let isChecked = ischeckedOption.checked;
    if (isChecked) {
      this._productService.CartProducts.push(value);
    }
    if (!isChecked) {
      let ProductAlreadyExist: number;
      ProductAlreadyExist = this._productService.CartProducts.findIndex(
        x => x.name === value.name && x.value === "Bikes"
      );
      if (ProductAlreadyExist !== -1) {
        this._productService.CartProducts.splice(ProductAlreadyExist, 1);
      }
    }
  }
}
