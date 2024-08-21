import { Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core';
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
export class NewTicketComponent {
// @ViewChild ('form') form? :ElementRef<HTMLFormElement>
private form = viewChild.required <ElementRef<HTMLFormElement>>('form') 
  // onSubmit(titleElement:HTMLInputElement ){
  //   console.dir(titleElement.value)
  // }
  
  onSubmit(title : string, ticketText:string ){
    console .log(title )
    console.log(ticketText )
  //  this.form()?.nativeElement.reset()
  this.form().nativeElement.reset()


  }
}
