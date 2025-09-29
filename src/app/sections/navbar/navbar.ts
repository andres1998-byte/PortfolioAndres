import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isScrolled = false;
  isDarkMode = false; // track dark mode in the component

  constructor() {
    // check localStorage on load
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleTheme() {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      this.isDarkMode = false;
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.isDarkMode = true;
    }
  }
}
