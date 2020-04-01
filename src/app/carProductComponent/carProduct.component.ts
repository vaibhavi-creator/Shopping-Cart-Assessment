import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "product-car",
  templateUrl: "carProduct.component.html",
  styleUrls: ["carProduct.component.css"]
})
export class CarProductComponent implements OnInit {
  CarProducts: { value: string; name: string }[];

  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.CarProducts = this._productService.productData.filter(
      x => x.value === "Cars"
    );
  }
  test(value: any, id: any) {
    let ischeckedOption = document.getElementById(
      "car" + id
    ) as HTMLInputElement;
    let isChecked = ischeckedOption.checked;
    if (isChecked) {
      this._productService.CartProducts.push(value);
    }
    if (!isChecked) {
      let ProductAlreadyExist: number;
      ProductAlreadyExist = this._productService.CartProducts.findIndex(
        x => x.name === value.name && x.value === "Cars"
      );
      if (ProductAlreadyExist !== -1) {
        this._productService.CartProducts.splice(ProductAlreadyExist, 1);
      }
    }
  }
}
