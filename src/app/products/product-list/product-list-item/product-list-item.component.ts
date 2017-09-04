import { Product } from './../../../common/models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  selectProduct() {
    const link = ['.', this.product.id];
    this.router.navigate(link, {relativeTo: this.route});
  }

  editUser() {
    const link = ['/admin/product', this.product.id];
    this.router.navigate(link);
  }

  ngOnInit() {
  }

}
