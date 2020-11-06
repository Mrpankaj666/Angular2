import { Component } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-project';
  inflectionPoint:string;
  maximumDrop:string;

  constructor(){
    var array = [1, 2, 3, 4, 5, 5, 2, 4, 4];
    //var array = [-4, 3, 2, 14];
    this.inflectionPoint = "Inflection point is: " + this.getinflectionPoint(array);
    var onionArray = [21, 19, 24, 32, 30, 31, 34, 31, 31, 26, 29];
    this.getMaximumDropInOnions(onionArray);
    
  }

  /** Approach : take sum and didvide by2 to get the half of the total and run loop and store i value in annother variable and then
   * compare with sum wherever we fount sum euqal to value return that index else -1
   * time complexit will be o(n)
   */
  getinflectionPoint(array:number[]):number{
    var sum = _.reduce(array, (item,num) =>{ return item + num; }, 0);
    sum = sum/2;
    var point = 0;
    for(let i =0; i<array.length;i++){
      point += array[i];
        if(sum == point){
          return i;
        }
    }
    return -1;
  }

  /** Approach:
   * Get max value from array and store index in anoter variable and check the smallest value from max and store in droppoint variable
   * and get the maximum drop.
   * time complexit will be o(n)
   */
  getMaximumDropInOnions(array:number[]){
    var max= _.max(array, (item) => {return item});
    var index = 0;
    var dropPoint = 0
    for(let i=0; i<array.length;i++){
      if(max == array[i]){
        index = i;
        dropPoint = max;
      }
      if(dropPoint > array[i] && index < i){
        dropPoint = array[i];
      }
    }
    if(dropPoint > 0){
      this.maximumDrop = `the max price drop was from $ ${max} to $ ${dropPoint} a price drop of $ ${max-dropPoint}`;
    }
  }
}
