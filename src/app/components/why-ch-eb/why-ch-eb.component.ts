import { Component } from '@angular/core';
import { FeatureDescriptions, Features } from '../../enums/cards';
import { CommonModule } from '@angular/common';
import { Assets } from '../../enums/imgs';

@Component({
  selector: 'app-why-ch-eb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-ch-eb.component.html',
  styleUrl: './why-ch-eb.component.scss',
})
export class WhyChEBComponent {
  FeaturesList = Object.values(Features); // تحويل enum إلى Array
  FeatureDescriptions = Object.values(FeatureDescriptions);
  Assets = Assets;
  Icons = [Assets.IconOnline, Assets.IconOnboarding, Assets.IconBudgeting, Assets.IconApi];
}
