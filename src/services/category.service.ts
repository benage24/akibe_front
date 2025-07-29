import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Repository } from '../repository/repository';


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Repository<any>  {
  constructor(
    protected override _http: HttpClient,
    protected override _router: Router,
    // protected override _dialog: MatDialog
) {
    super(_http, `${environment.baseUrl}`, _router);
}
}
