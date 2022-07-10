import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../models/product";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product = {
    id: 1,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  quantity: string = '1';


  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    //this.product = this.productService.getProductById(this.activatedRoute.snapshot.params['id'])[0]
    this.productService.getProductById(this.activatedRoute.snapshot.params['id']).subscribe( product => {
      this.product = product;
    })
  }

  addProductToOrder(){
    this.cartService.addProductToCart(this.product, this.quantity);
    alert("Added!")
  }

}
