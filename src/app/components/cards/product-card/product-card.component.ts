import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTimes,
  faPrint,
  faMessage,
  faSave,
  faCheckCircle,
  faTrash,
  faEdit,
  faFilePdf,
  faCheck,
  faEye,
  faBriefcase,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { ProductDetail } from '../../dialogs/product-detail/product-detail';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class ProductCardComponent {
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
      width: '55%',
      height: '90%',
      data: {
        data: product,
      },
    });
  }

}
