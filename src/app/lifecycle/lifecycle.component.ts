import { Component, Input, signal } from '@angular/core';
import { Tickets } from '../dashboard/ticket/tickets.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
@Input() data ?: Tickets
ditailsVisible = signal(false)


onToggleDetails(){
  this.ditailsVisible.set(!this.ditailsVisible())
}
markAsCompleted(){}
}
