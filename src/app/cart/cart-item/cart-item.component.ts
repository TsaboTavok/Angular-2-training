import { CartService } from './../cart.service';
import { CartItem } from './cart-item.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges,
  HostListener, ViewChild, ElementRef, HostBinding, DoCheck,
  KeyValueDiffers } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, DoCheck {
  @Input() item: CartItem;
  @HostBinding('style.backgroundColor') hostBack = 'transparent';
  @ViewChild('mainSpan') mainSpan: ElementRef;
  public textStyle: object = {};

  differ: any;

  constructor(private _cartService: CartService,
    differs: KeyValueDiffers) {
      this.differ = differs.find([]).create(null);
     }

  ngOnInit() {
  }

  deleteItem() {
    this._cartService.deleteItem(this.item);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.item);

    if (changes) {
      this.updateTextStyle();
    }
  }

  updateTextStyle() {
    if (this.item.count > 10) {
      this.textStyle = {'color': 'red'};
    } else {
      this.textStyle = {'color': 'blue'};
    }
  }

  @HostListener('mouseenter') enter() {
    this.hostBack = 'grey';
    (<HTMLSpanElement>this.mainSpan.nativeElement).style.border = 'double';
  }

  @HostListener('mouseleave') leave() {
    this.hostBack = 'transparent';
    (<HTMLSpanElement>this.mainSpan.nativeElement).style.border = 'none';
  }
}
