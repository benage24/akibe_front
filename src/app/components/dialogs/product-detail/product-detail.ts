import { CurrencyPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail {
pName!:string
pItem!:any
 constructor(
   
    private dialog: MatDialog,
   
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<ProductDetail>,
   
  ){
    if(data){
      this.pName=data.data.name;
      this.pItem=data.data.items
         console.log("data",data.data)
    }
 
  }
}
