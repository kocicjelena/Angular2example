import {Component, ElementRef, Input, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';
@Component({
  selector: 'my-app',
    templateUrl: 'app/app.component.html',
      styleUrls: ['app/app.component.css'],
  directives: [HeroDetailComponent, ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Stanga';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private _heroService: HeroService) { }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  onSave(){this.selectedHero = "";}
    lat: number = 51.678418;
  lng: number = 7.809007;
}

