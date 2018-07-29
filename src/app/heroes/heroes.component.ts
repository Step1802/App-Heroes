import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';


import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'] 
})



export class HeroesComponent implements OnInit {
  public modalRef: BsModalRef;
  heroes: Hero[];
  constructor(private heroService: HeroService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero, template: TemplateRef<any>): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    this.modalRef.hide()
  }
  
  public openModal(template: TemplateRef<any>) {    
    this.modalRef = this.modalService.show(template); // {3}    
  }

}

