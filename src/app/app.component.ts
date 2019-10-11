import { Component } from '@angular/core';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Liga';
  menu = MenuComponent;

  getBackground(){
      return 'url(\'./img/background.jpg\')';
  }
}


