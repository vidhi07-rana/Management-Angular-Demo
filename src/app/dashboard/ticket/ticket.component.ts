import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Tickets } from './tickets.model';
import { TicketsComponent } from "./tickets/tickets.component";
import { NgModel } from '@angular/forms';
import { LifecycleComponent } from "../../lifecycle/lifecycle.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent, TicketsComponent, LifecycleComponent,CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  tickets: Tickets[] = []
   onAdd(ticketData: { title: string; text: string }) {
    const ticket: Tickets = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    };
    this.tickets.push(ticket);
  }
  onCloseTicket(id:string){
this.tickets = this.tickets.map((ticket)=>{
if(ticket.id === id){
return{... ticket, status:'close' }
}
return ticket;
})
  }
}
