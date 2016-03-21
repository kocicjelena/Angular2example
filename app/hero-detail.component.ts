import {Component} from 'angular2/core';
import {Hero} from './hero';
@Component({
  selector: 'my-hero-detail',
      templateUrl: 'app/hero-detail.component.html',
      styleUrls: ['app/hero-detail.component.css'],
  inputs: ['hero']
})
export class HeroDetailComponent {

  hero: Hero;
}
