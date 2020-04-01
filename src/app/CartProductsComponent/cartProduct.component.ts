import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "product-cart",
  templateUrl: "cartProduct.component.html",
  styleUrls: ["cartProduct.componnet.css"]
})

export class CartProductComponent implements OnInit {
  constructor(private _productService: ProductService) {}
}
