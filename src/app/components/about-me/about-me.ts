import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'about-me',
  imports: [NgxTypedJsModule, ContactComponent],
  standalone: true,
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss'],
})
export class AboutMeComponent {}
