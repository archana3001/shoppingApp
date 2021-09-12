import { Injectable } from '@angular/core';
import { Admin, Product } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpoint: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(user: Admin): Observable<any> {
    let api = `${this.endpoint}/api/register-admin`;
    return this.http.post(api, user).pipe(
        catchError(this.handleError)
      )
  }
 

  // Sign-in
  signIn(user: Admin) {
    return this.http.post<any>(`${this.endpoint}/api/admin-signin`, user).subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        localStorage.setItem('_id', res._id)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['profile/' + res.msg._id]);
        }, (err)=>{
          console.log(err);
        })
      },(err)=>{
        alert("error");
     } )
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    localStorage.removeItem('id');
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

  // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/api/admin-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }


  // Adding products to collection
  addProduct(products: Product): Observable<any> {
    let api = `${this.endpoint}/api1/add-product`;
    return this.http.post(api, products).pipe(
        catchError(this.handleError)
      )
  }

  // get ALL products
  getAllProducts(): Observable<any> {
    let seller_id=localStorage.getItem('_id');
    let api = `${this.endpoint}/api1/allproduct/${seller_id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      catchError(this.handleError)
    )
  }

  deleteProduct(product: Product): Observable<any>{
    let api= `${this.endpoint}/api1/delete-product/${product._id}`;
    return this.http.delete(api, {headers: this.headers}).pipe(catchError(this.handleError))
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
