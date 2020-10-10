import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dataArray = [];

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
getData() {
return this.http.get('http://localhost:3000/budget');
}

// tslint:disable-next-line: typedef
setVariable(){
  debugger;
  this.getData().subscribe((res: any) => {
    this.dataArray = res;
    console.log(res);
    console.log('completion');
    return this.dataArray;
 });
}
// tslint:disable-next-line: typedef
getVariable(){
  if (this.dataArray){
    return this.dataArray;
  }else{
    console.log('SetVariableCalled');
    this.setVariable();
  }
}

}
