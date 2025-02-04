import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Biere } from '../core/interfaces/biere.interface';
import { Observable, catchError, of, throwError } from 'rxjs';
import { NewBiere } from '../core/interfaces/newBiere.interface';

@Injectable({
  providedIn: 'root'
})
export class BiereService {

  constructor(private http: HttpClient) { }

  private postHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Accept': 'application/json'
  });

  private getHeaders = new HttpHeaders({
    'Accept': 'application/json',
  });

  private errorBiere: Biere = {
    id: 99999,
    nom: "biere vide :(",
    pay: "Il y a un petit problème!",
    photo: "assets/beer_arti3.png",
    type: "",
    lat:0,
    lng:0,
    brasserie: "Brasserie de l'erreur",
    description: "",
    gouteur: ""
  }

  getOneRandomBiere(): Observable<Biere> {
    let options = { headers: this.getHeaders };
    let randomNumber: string = Math.floor(Math.random() * 20).toString();
    return this.http.get<Biere>(environment.baseUrl + "biere/" + randomNumber, options)
      .pipe(
        catchError(this.handleGetOneBiereError<Biere>(this.errorBiere))
      );
  }

  getOneBiere(id: string): Observable<Biere> {
    let options = { headers: this.getHeaders };
    return this.http.get<Biere>(environment.baseUrl + "biere/" + id.toString(), options)
      .pipe(
        catchError(this.handleGetOneBiereError<Biere>(this.errorBiere))
      );
  }

  getAllBiere(): Observable<Biere[]> {
    let options = { headers: this.getHeaders };
    return this.http.get<Biere[]>(environment.baseUrl + "bieres", options)
      .pipe(
        catchError(this.handleError)
      );
  }

  addBiere(biere: NewBiere): Observable<NewBiere> {
    let options = { headers: this.postHeaders };
    return this.http.post<NewBiere>(environment.baseUrl + "add/biere", biere, options);
  }

  deleteBiere(id: number): Observable<any> {
    let options = { headers: this.getHeaders };
    return this.http.delete(environment.baseUrl + "delete/biere/" + id.toString(), options);
  }

  putBiere(id:number, biere: Biere): Observable<any> {
    let options = { headers: this.getHeaders };
    return this.http.put(environment.baseUrl + "modify/biere/" + id.toString(),biere, options);
  }

  private handleGetOneBiereError<T>(result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  private handleError(error: HttpErrorResponse) {
    let message: string = "";
    if (error.status === 0) {
      message = "Oups il ya eu une erreur! " + error.message;
    } else {
      message = "Oups il ya eu une erreur! " + error.message;
    }
    return throwError(() => new Error(message));
  }

}





