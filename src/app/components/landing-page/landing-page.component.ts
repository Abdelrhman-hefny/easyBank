import { Component } from '@angular/core';
import { Assets } from '../../enums/imgs';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  Assets = Assets;
  ngOnInit() {
    document.documentElement.style.setProperty(
      '--image-url',
      Assets.BgIntroMobile
    );
  }
}
