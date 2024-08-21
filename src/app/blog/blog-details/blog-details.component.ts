import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss',
})
export class BlogDetailsComponent implements OnInit {
  selectedLanguage = 'en';
  blogId: string | null = null;
  blog: any = null;
  public blogs: any[] = [];
  selectedBlog: any | undefined;
  category!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public translateService: TranslateService
  ) {
    this.selectedLanguage = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.selectedLanguage = event.lang;
      this.fetchBlogDetails();
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['id'];
      this.fetchBlogDetails();
    });
  }

  fetchBlogDetails(): void {
    const url: string = `../../../assets/blogs/${this.selectedLanguage}-blogs.json`;
    this.http.get(url).subscribe((response: any) => {
      this.blogs = response.blogs;
      if (this.blogs) {
        this.selectedBlog = this.blogs.find(
          (blog) => blog.url === this.category
        );
        if (this.selectedBlog) {
        } else {
          this.router.navigate(['/de/not-found']);
          return;
        }
      } else {
        console.error('Failed to fetch blogs');
      }
    });
  }
}
