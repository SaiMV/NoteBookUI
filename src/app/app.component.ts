import { Component } from '@angular/core';
// import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyNoteBook';
  constructor() {
    // constructor(private swUpdate: SwUpdate) {
    // swUpdate.available.subscribe((event) => {
    // if (askUserToUpdate()) {
    //   window.location.reload();
    // }
    // });
  }
}
