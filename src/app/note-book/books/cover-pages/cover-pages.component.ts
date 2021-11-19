import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cover-pages',
  templateUrl: './cover-pages.component.html',
  styleUrls: ['./cover-pages.component.css']
})
export class CoverPagesComponent implements OnInit {

  constructor() { }

  changedCoverPage:boolean = false;
  hideCoverPage:boolean = false;
  hideMainCoverPage:boolean = false;
  hidePage:boolean = false;
  ngOnInit() {
    setTimeout(()=>{
      this.hideMainCoverPage = true;
    },2500)
  }

  changeCoverPage(){
    this.changedCoverPage = true;
    this.hidePage = true;
    setTimeout(()=>{
      this.hideCoverPage = true;
      
    },500)
  }

}
