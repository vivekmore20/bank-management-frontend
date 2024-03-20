import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrl: './nav-bar-main.component.scss'
})
export class NavBarMainComponent {


  @Input() headers:Array<string>=[];
  
}
