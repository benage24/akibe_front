import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetail } from '../../dialogs/product-detail/product-detail';
import { MatDialog } from '@angular/material/dialog';
import { faTimes, faEye, faBriefcase, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  imports: [FontAwesomeModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
 faTimes=faTimes
   faEye=faEye
   faBriefcase=faBriefcase
   faHeart=faHeart
  @Input() card: any

    constructor(

    private dialog: MatDialog,
  
    
   
  ) {}

 openProductPreviwDialog(product: any) {
  console.log(product,"rrrr")
    this.dialog.open(ProductDetail, {
      width: '90%',
      height: '90%',
      data: {
        data: product,
      },
    });
  }
}
