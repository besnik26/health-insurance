import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { GlobalHeaderComponent } from '../share/global-header/global-header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone:true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports:[FormsModule, GlobalHeaderComponent]

})
export class BlogComponent implements OnInit {
  blogsPerPage: number = 4;
  displayedBlogs: any[] = [];
  allBlogs: any[] = [];
  latestBlogs: any[] = [];
  searchInput: string = '';
  showMoreClicked: boolean = false;
  selectedLanguage: string = 'en';
  noBlogsFound: boolean = false;

  constructor(
    public translateService: TranslateService,
    private http: HttpClient,
    private router: Router
  ) {
    this.selectedLanguage = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.selectedLanguage = event.lang;
      this.fetchBlogs();
    });
  }

  ngOnInit(): void {
    this.fetchBlogs();
  }
  onBlogClick(blogUrl: any): void {
    const url =`/${this.selectedLanguage}/blogs/${blogUrl}`;
    window.open(url, '_blank', 'noopener');
  }
  scrollToSection() {
    const section = document.getElementById('targetBlogs');
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - 120, 
        behavior: 'smooth'
      });
    }
  }

  fetchBlogs(): void {
    const url: string = `../../../../assets/blogs/${this.selectedLanguage}-blogs.json`;
    this.http.get<any>(url).subscribe(
      data => {
        this.allBlogs = data.blogs || [];

        this.allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        this.displayedBlogs = this.allBlogs.slice(0, this.blogsPerPage);

        this.latestBlogs = this.allBlogs.slice(0, 5);
      },
      error => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  showMoreBlogs(): void {
    const nextBlogs = this.allBlogs.slice(
      this.displayedBlogs.length,
      this.displayedBlogs.length + this.blogsPerPage
    );
    this.displayedBlogs = [...this.displayedBlogs, ...nextBlogs];
    this.showMoreClicked = this.displayedBlogs.length >= this.allBlogs.length;
  }

  searchBlogs(): void {
    if (!this.searchInput.trim()) {
      this.displayedBlogs = this.allBlogs.slice(0, this.blogsPerPage);
      this.showMoreClicked = false; 
      this.noBlogsFound = false;
    } else {
      
      this.displayedBlogs = this.allBlogs.filter(blog =>
        blog.mainTitle.toLowerCase().includes(this.searchInput.toLowerCase())
      );
      
      this.showMoreClicked = true;
      this.noBlogsFound = this.displayedBlogs.length === 0; 
    }
  }
}
