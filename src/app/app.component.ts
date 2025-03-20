import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { WhyChEBComponent } from './components/why-ch-eb/why-ch-eb.component';
import { LastesComponent } from './components/latest/lastes.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    LandingPageComponent,
    WhyChEBComponent,
    LastesComponent,
    FooterComponent
  ], // ✅ تصحيح قائمة imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // ✅ تصحيح اسم الخاصية (styleUrls بدلًا من styleUrl)
})
export class AppComponent {
  title = 'Project1';
}
