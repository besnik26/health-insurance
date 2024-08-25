import {ChangeDetectionStrategy, Component,NgZone, OnInit } from '@angular/core';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';


@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [TuiCarousel,TuiPagination],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent implements OnInit{
  protected index = 0;
  itemsCount = 3;
  
  protected readonly items = [
    { name: 'User-1', message: 'This website is very good haha.' },
    { name: 'User-2', message: 'This website is very nice haha.' },
    { name: 'User-3', message: 'This website is very bad haha.' },
    { name: 'User-4', message: 'This website is very good haha.' },
    { name: 'User-5', message: 'This website is very nice haha.' },
    { name: 'User-6', message: 'This website is very bad haha.' },
  ];

  constructor(private ngZone: NgZone) {
    this.setupResponsiveItemsCount();
  }

  ngOnInit(): void {
    this.updateItemsCount(window.innerWidth);
  }

  setupResponsiveItemsCount(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
        this.ngZone.run(() => {
          this.updateItemsCount(window.innerWidth);
        });
      });
    });
  }

  updateItemsCount(width: number): void {
    if (width < 768) {
      this.itemsCount = 1;
    } else if (width >= 768 && width < 1024) {
      this.itemsCount = 2;
    } else {
      this.itemsCount = 3;
    }
  }
}
