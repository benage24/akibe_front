import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Repository } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends Repository<any> {

  constructor(
    protected override _http: HttpClient,
    protected override _router: Router,
    // protected override _dialog: MatDialog
) {
    super(_http, `${environment.baseUrl}`, _router);
}
handleError(error:HttpErrorResponse)
{
console.log("API ERROR",error)
return throwError(()=>new Error('something went wrong please try again'))
}
  // getProduct():Observable<any>{
  //   return this.http.get(`${environment.baseUrl}/products`).pipe(
  //     catchError(this.handleError)
  //   )
  // }
}
