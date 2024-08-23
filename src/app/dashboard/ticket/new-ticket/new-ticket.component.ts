import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, output, Output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../control/control.component";
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent  {
  
@ViewChild ('form') form? :ElementRef<HTMLFormElement>
// @Output() add? = new EventEmitter<{title:string; text: string}>();
add = output<{title:string; text: string}>()
enteredTitle = '';
enteredText ='';

// private form = viewChild.required <ElementRef<HTMLFormElement>>('form') 
  // onSubmit(titleElement:HTMLInputElement ){
  //   console.dir(titleElement.value)
  // }
  
  onSubmit(){
this.add.emit({title:this.enteredTitle, text: this.enteredText})
  // this.form?.nativeElement.reset()
  this.enteredText='';
  this.enteredTitle='';
  }
  // ngOnInit(): void {
  //   console.log('ONINIT');
  //   console.log(this.form?.nativeElement)
  //     }
  //     ngAfterContentInit() {
  //       // Log both controls after content initialization
  //       console.log('AFTER VIEW INIT');
  //       console.log(this.form?.nativeElement)

        
  //       //   console.log('Request Control:', this.requestControl);
  //     }
}
