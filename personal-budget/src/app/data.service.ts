import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  someDataObservable: Observable<any>;

// private _cachedData = [];
// public dataArray = this._cachedData.asObservable();

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
getData(): Observable<any> {
  if (this.someDataObservable) {
    return this.someDataObservable;
  } else {
    this.someDataObservable = this.http.get('http://localhost:3000/budget').pipe(shareReplay());
    return this.someDataObservable;
  }
}

}
