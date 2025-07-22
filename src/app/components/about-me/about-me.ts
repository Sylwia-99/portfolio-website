import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'about-me',
  imports: [NgxTypedJsModule],
  standalone: true,
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss'],
})
export class AboutMeComponent {}
