import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

   fruits: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Strawberry',
    'Mango',
    'Pineapple',
    'Cherry',
    'Blueberry',
    'Watermelon',
  ];

  constructor() { }


  filterList(value:string): Observable<string[]>{
  return of(this.fruits.filter( res=> res.toLocaleLowerCase().includes(value.toLocaleLowerCase())));
  }



}
