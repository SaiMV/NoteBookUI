import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BooksModule } from './note-book/books/books.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
