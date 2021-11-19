import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { PagesComponent } from './pages/pages.component';
import { CoverPagesComponent } from './cover-pages/cover-pages.component';
import { LoginComponent } from './login/login.component';
import { BookShelfComponent } from './book-shelf/book-shelf.component';


@NgModule({
  declarations: [BooksComponent, PagesComponent, CoverPagesComponent, LoginComponent, BookShelfComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent,CoverPagesComponent,PagesComponent,LoginComponent,BookShelfComponent
  ]
})
export class BooksModule { }
