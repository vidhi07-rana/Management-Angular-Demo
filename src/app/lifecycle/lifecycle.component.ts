import { Component, input, Input, output, signal } from '@angular/core';
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
// @Input() data ?: Tickets
data = input.required<Tickets>({})
close = output();
ditailsVisible = signal(false)


onToggleDetails(){
  // this.ditailsVisible.set(!this.ditailsVisible())
  this.ditailsVisible.update((wasVisble)=>{
    return !wasVisble;
  })
}
markAsCompleted(){
  this.close.emit();
}
}
