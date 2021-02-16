import { Component } from '@angular/core';

export interface Card{
  title:string;
  text:string;
  picLink:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular-app';

 
}
