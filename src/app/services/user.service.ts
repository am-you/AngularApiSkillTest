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

  /* GET all users from API */
  /* First page*/
  getUsersPg1(): Observable<any> {
    const parameters = new HttpParams().set('page', '1');

    return this.http.get<User[]>(this.API, {params: parameters})
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  /* Second page*/
  getUsersPg2(): Observable<any> {
    const parameters2 = new HttpParams().set('page', '2');

    return this.http.get<User[]>(this.API, {params: parameters2})
      .pipe(
        tap(_ => console.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }
  /* FORKJOIN à VOIR*/

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
      console.error(error); // log to console instead

      console.log(`${operation}`);

      // renvoyer un res vide pr que lapp tourne tjs.
      return of(result as T);
    };
  }
}
