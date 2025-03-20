import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assets } from '../../enums/imgs';

enum Articles {
  ARTICLE_1 = 'Receive money in any currency with no fees',
  ARTICLE_2 = 'By Wilson Hutton Treat yourself without worrying about money',
  ARTICLE_3 = 'Takeyour Easybank card wherever you go',
  ARTICLE_4 = 'By Claire Robinson Our invite-only Beta accounts are now live!',
}

enum ArticleDescriptions {
  ARTICLE_1 = `The world is getting smaller and we're becoming more mobile.
               So why should you be forced to only receive money in a single...`,

  ARTICLE_2 = `Our simple budgeting feature allows you to separate out your spending
               and set realistic limits each month. That means you.....`,

  ARTICLE_3 = `We want you to enjoy your travels. This is why we don't charge any fees
               on purchases while you're abroad. We'll even show you....`,

  ARTICLE_4 = `After a lot of hard work by the whole team, we're excited to launch our
               closed beta. It's easy to request an invite through the site....`,
}
enum LatestImgs {
  ImageConfetti = '../../assets/imgs/image-confetti.jpg',

  ImageCurrency = '../../assets/imgs/image-currency.jpg',

  ImagePlane = '../../assets/imgs/image-plane.jpg',

  ImageRestaurant = '../../assets/imgs/image-restaurant.jpg',
}
@Component({
  selector: 'app-lastes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lastes.component.html',
  styleUrl: './lastes.component.scss',
})
export class LastesComponent {
  ArticlesList = Object.keys(Articles) as (keyof typeof Articles)[];
  Articles = Articles;
  ArticleDescriptions = ArticleDescriptions;
  Assets = Assets;
  LatestImgs = [
    LatestImgs.ImageConfetti,
    LatestImgs.ImageCurrency,
    LatestImgs.ImagePlane,
    LatestImgs.ImageRestaurant,
  ];
}
