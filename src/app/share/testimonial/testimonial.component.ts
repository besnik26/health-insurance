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
    { name: 'Maurizia Rossa', 
      message: 'Thanks to your health insurance, I got the best treatment without worrying about the costs. It’s been a life-saver!',
      imgUrl:'../../../assets/images/testimonial/profile-1.jpg' 
    },
    { name: 'Anna Ross', 
      message: 'Your legal insurance gave me peace of mind during a difficult time. The support was outstanding.',
      imgUrl:'../../../assets/images/testimonial/profile-2.jpg' 
    },
    { name: 'Micaila Toma',
      message: 'When my dog needed surgery, your pet insurance took care of everything. Thank you for caring!',
      imgUrl:'../../../assets/images/testimonial/profile-3.jpg' 
    },
    { name: 'Hubert Jones', 
      message: 'When I had an accident, your car insurance was there to cover everything quickly and hassle-free. Highly recommended!',
      imgUrl:'../../../assets/images/testimonial/profile-7.jpg' 
    },
    { name: 'Lana Petersen', 
      message: 'Our business faced an unexpected challenge, but your company insurance had us covered. Couldn’t ask for better protection!',
      imgUrl:'../../../assets/images/testimonial/profile-5.jpg'
    },
    { name: 'Amara Mathews', 
      message: 'The provision plan you offered secured my future. It’s the smartest investment I’ve ever made!',
      imgUrl:'../../../assets/images/testimonial/profile-9.jpg' 
    },
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
