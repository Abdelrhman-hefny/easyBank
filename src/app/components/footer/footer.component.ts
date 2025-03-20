import { Component } from '@angular/core';
import { Assets } from '../../enums/imgs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
Assets = Assets
}
