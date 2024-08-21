import { Component, ContentChild, contentChild, ElementRef, HostBinding, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control',
    '(click)':'onClick()'
  } 
})          
export class ControlComponent {      
  // @HostBinding('click') onClick(){
  //   console.log('Clicked')
  //   console.log(this.el)
    
  // }
label = input.required<string>();
private el = inject(ElementRef)
 @ContentChild('input, request') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
onClick(){
  console.log('Clicked')
      console.log(this.el)
      console.log(this.control)

}
}
