import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, ElementRef, HostListener} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd, RouterLink, RouterLinkActive} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {NgClass} from "@angular/common";
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgClass, NgOptimizedImage, TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeLang: any;
  isDropdownOpen: boolean = false;
  isSecondDropdownOpen:boolean = false;
  isLangDropdownOpen:boolean = false;
  isMenuOpen: boolean = false;
  selectedLanguage = 'de';
  selectedImg = '';
  displaySelectedLanguage: any;
  isTablet?:boolean;
  showNavbar: boolean = true;

  constructor(
    private router: Router,
    public translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private elementRef: ElementRef,
    private location: Location
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const lang =
          this.activatedRoute.snapshot.firstChild?.url[0]?.path || 'de';
        const selectedLang =
          this.langData.find((item) => item.value === lang)?.value || this.selectedLanguage;
        this.selectedLanguage = selectedLang;
        this.displaySelectedLanguage = this.langData.filter(
          (item) => item.value === lang
        )[0]?.value_dropdown;

        if (this.isBrowser()) {
          this.isTablet = window.innerWidth > 767 && window.innerWidth < 1126;
          window.addEventListener('resize', () => {
            this.isTablet = window.innerWidth > 767 && window.innerWidth < 1126;
          });
        }
      }
      

    });
  }

  scrollToTop() {
    if (this.isBrowser()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (this.isTablet){
        this.closeAllDropdowns();
      }
      this.isLangDropdownOpen = false;
    }
  }

  scrollPramien(){
    if (this.isBrowser()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (this.isTablet){
        this.closeAllDropdowns();
      }
      this.isLangDropdownOpen = false;
      this.closeAllDropdowns();
    }
  }

  langData = [
    {
      name: 'Deutsch',
      value: 'de',
      value_dropdown: 'DE',
      img: 'assets/images/flags/de.svg',
    },
    {
      name: 'English',
      value: 'en',
      value_dropdown: 'EN',
      img: 'assets/images/flags/en.svg',
    },
    {
      name: 'Albanian',
      value: 'sq',
      value_dropdown: 'SQ',
      img: 'assets/images/flags/sq.svg',
    },
    
  ];

  changeLanguage(lang: string): void {
    const selectedLang = this.langData.find((item) => item.value === lang);
    if (selectedLang) {
      this.selectedLanguage = selectedLang.value;
      this.displaySelectedLanguage = selectedLang.value_dropdown;
      this.selectedImg = selectedLang.img;

      const currentUrl = this.router.url;
      const currentLang = currentUrl.split('/')[1];
      const currentPath = currentUrl.split('/')[2];
      


      this.translate.use(lang);
      
    }
  }

  @HostListener('document:click', ['$event'])
  ClickOut(event: MouseEvent) {
    const isClickedOutside = !this.elementRef.nativeElement.contains(
      event.target as Node
    );
    if (isClickedOutside) {
      this.isDropdownOpen = false;
      this.isSecondDropdownOpen = false;
      this.isMenuOpen = false;
      this.isLangDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleSecondDropdown() {
    this.isSecondDropdownOpen = !this.isSecondDropdownOpen;
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.isMenuOpen = false;
  }

  closeAllDropdowns() {
    this.isDropdownOpen = false;
    this.isSecondDropdownOpen = false;
    this.isMenuOpen = false;
    this.isLangDropdownOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isDropdownOpen = false;
    this.isSecondDropdownOpen = false;
    this.isLangDropdownOpen = false;
  }

  toggleLangDropdown() {
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  closeLangDropdown() {
    this.isLangDropdownOpen = false;
    this.isMenuOpen = false;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

}
