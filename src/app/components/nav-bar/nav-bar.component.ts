import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Assets } from '../../enums/imgs';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgbCollapseModule], // ✅ تصحيح قائمة imports
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  Assets = Assets;

  name = 'Angular';
  public isCollapsed = true;
}
