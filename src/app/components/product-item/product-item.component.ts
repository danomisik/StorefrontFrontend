import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/product";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  quantity: string = '1';

  constructor(private orderService: CartService) { 
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

  addProductToOrder(){
    this.orderService.addProductToCart(this.product, this.quantity);
    alert("Added!")
  }

}
