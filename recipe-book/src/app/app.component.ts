import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  public partMain: string = 'recipe'; 

  choosePart(eventData: {section: string}){
    this.partMain = eventData.section;
  }
}
