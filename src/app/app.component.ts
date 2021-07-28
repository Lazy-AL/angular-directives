import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onlyOdd = false;
  oddNumber = [1, 3, 5];
  evenNumber = [2, 4];
}
