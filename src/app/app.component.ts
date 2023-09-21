import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinct, distinctUntilChanged, switchMap } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'angular-switchMap-rxjs-implementation';
  inputField:FormControl = new FormControl('');

  fruitsList:string[]=[];

  constructor(private appService:AppService){}


  ngOnInit(): void {
    this.inputField.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this.appService.filterList(value))
    ).subscribe( (res:string[])=>{
      this.fruitsList = res;
    })
  }


}
