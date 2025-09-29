import { Component, signal } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Contact } from './sections/contact/contact';
import { Navbar } from './sections/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, About, Experience, Contact, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-site');
}
