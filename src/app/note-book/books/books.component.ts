import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  firstHeight = 0
  //Method to stop typing
  isOverflown(element){
    let scrlHeight = element.target.scrollHeight;
    scrlHeight -= 1;
    if(this.firstHeight == 0){
      this.firstHeight = scrlHeight
    }
    // console.log(scrlHeight,element.target.clientHeight)
    if(scrlHeight > element.target.clientHeight || scrlHeight >this.firstHeight  ||
      element.target.scrollWidth > element.target.clientWidth){
        // element.preventDefault(); // used for content editable
        
        element.target.value =  element.target.value.substr(0, element.target.value.length - 1)
    }
  }
 

  createNewPage(){

  }
  
  
/********* Challanges ********/
  // copy paste scenario
  // screen rezie scenario - firstHeight should be changed
}
