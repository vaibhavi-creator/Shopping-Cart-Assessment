import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  productData = [
    { value: "Cars", name: "123" },
    { value: "Cars", name: "Volvo" },
    { value: "Bikes", name: "Royal Enfield" },
    { value: "Bikes", name: "Hero" },
    { value: "Cars", name: "Saab" },
    { value: "Bikes", name: "TVS" },
    { value: "Bikes", name: "Kawasaki" },
    { value: "Cars", name: "Fiat" },
    { value: "Cars", name: "Saab" },
    { value: "Bikes", name: "Honda" }
  ];
  isAllProductSelected: boolean;
  isCarProductSelected: boolean;
  isBikeProductSelected: boolean;
  CartProducts: any[];
  finalCartProducts: any[];
  constructor() {
    this.isAllProductSelected = true;
    this.isCarProductSelected = false;
    this.isBikeProductSelected = false;
    this.CartProducts = [];
    this.finalCartProducts = [];
  }
}
