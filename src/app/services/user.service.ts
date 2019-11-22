import {Injectable} from '@angular/core';
import {User} from '../User';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = 'https://reqres.in/api/users';

  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };

  constructor(
    private http: HttpClient) {
  }

  /** GET all users from API */
  getUsersPg1(): Observable<any> {
    const parameters = new HttpParams().set('page', '1');

    return this.http.get<User[]>(this.API, {params: parameters})
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUsersPg2(): Observable<any> {
    const parameters2 = new HttpParams().set('page', '2');

    return this.http.get<User[]>(this.API, {params: parameters2})
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id): Observable<any> {
    const parameters = new HttpParams().set('id', id);
    return this.http.get<User>(this.API, {params: parameters})
      .pipe(
        tap(_ => console.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
