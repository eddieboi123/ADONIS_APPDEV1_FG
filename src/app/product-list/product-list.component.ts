import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnInit} from '@angular/core';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
  export class ProductListComponent implements OnInit {
    productId: number | null = null;
    product: any = null;
  
  products = [
    {id: 1, name: "POCO X6 Pro", price: 250, stock: 5},
    {id: 2, name: "INFINIX GT 30 PRO", price: 260, stock:0},
    {id: 2, name: "TECHNO CAMON 20 PRO 5G", price: 180, stock:0},
    {id: 1, name: "POCO X6", price: 220, stock: 5},
    {id: 2, name: "INFINIX NOTE 40 PRO 4G", price: 240, stock:0},
  ];
  
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.productId = Number(this.route.snapshot.paramMap.get('id'));
      this.product = this.products.find(p => p.id === this.productId);
    }
    
  Name: string=" ";
  Price: number = 0;

  

  update(name: string, price: number){
    this.Name = name;
    this.Price = Number(price);
  }

    
}
