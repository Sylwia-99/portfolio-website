import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me';
import { ContactComponent } from '../contact/contact';
import { ServicesComponent } from '../services/services';
import { SkillsComponent } from '../skills/skills';
import { PortfolioComponent } from '../portfolio/portfolio';
import { MainComponent } from '../main/main';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    AboutMeComponent,
    ContactComponent,
    ServicesComponent,
    SkillsComponent,
    PortfolioComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {}
