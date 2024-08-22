import { Component,
   ContentChild,
    ElementRef,
    inject, 
    Input,
    ViewEncapsulation, 
    AfterContentInit, 
    contentChild,
    viewChild,
    ViewChild, 
     OnInit, 
     afterRender,
     afterNextRender,runInInjectionContext,
     Injector} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {



  @Input() label: string = '';  
  private el = inject(ElementRef);
  // private injector = inject(Injector); // Injecting the Injector to use with runInInjectionContext

  @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // @ContentChild('titleRef', { static: false }) private titleControl?: ElementRef<HTMLInputElement>;
  // @ContentChild('requestRef', { static: false }) private requestControl?: ElementRef<HTMLTextAreaElement>;
  // ngAfterContentInit() {
  //   runInInjectionContext(this.injector, () => {
  //     afterRender(() => {
  //       console.log('afterRender');
  //     });

  //     afterNextRender(() => {
  //       console.log('afterNextRender');
  //     });
  //   });
  // }
  onClick() {
    console.log('Clicked');
    console.log(this.el);

    if (this.control) {
      console.dir(this.control.nativeElement);
    } else {
      console.dir('Control is undefined.');
    }
    // if (this.titleControl) {
    //   console.log('Title Control:', this.titleControl);
    // }
    
    // if (this.requestControl) {
    //   console.log('Request Control:', this.requestControl);
    // }
  }
}



