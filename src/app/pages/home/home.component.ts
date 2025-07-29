import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { ProductCardComponent } from '../../components/cards/product-card/product-card.component';
import { error } from 'console';
import { CategoryCardComponent } from '../../components/cards/category-card/category-card.component';
import { faBriefcase, faCalendarDays, faClock, faEye, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JumbotronComponent,CategoryCardComponent,ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
productList:any
categoryList:any
faCalendarDays=faCalendarDays
faClock=faClock
 faTimes=faTimes
   faEye=faEye
   faBriefcase=faBriefcase
   faHeart=faHeart
  constructor(private productService:ProductService) {}
 ngOnInit(): void{
  this.getCategories()
  this.getProduct()
  }


 getProduct(){
  this.productService.find$('products').subscribe({
    next:(res)=>{
        this.productList=res
          console.log(this.productList)
    },
    error:(e)=>{
      console.log(e)
    }
  })
 }

 getCategories(){
  this.productService.find$('category').subscribe({
    next:(res)=>{
        this.categoryList=res
        //  console.log(this.productList)
    },
    error:(e)=>{
      console.log(e)
    }
  })
 }

 public images: any[] = [
  {
    imageSrc: 'images/L01-banner-02.webp',
    label: '3/fois la semaine ',
    icon:this.faCalendarDays
  },
  {
    imageSrc: 'images/L01-banner-02.webp',
    label: '1 heure de cours par seance',
    icon:this.faClock
  },

  {
    imageSrc: 'images/L01-banner-02.webp',
    label: '3/fois la semaine ',
    icon:this.faCalendarDays
  },
  // {
  //   imageSrc: '../../../assets/img/c3.jpeg',
  //   label: 'Achats de parcelles',
  // },
];
}
