
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];

  getTickets(): Ticket[] {
    return this.tickets;
  }

  addTicket(ticket: Ticket): void {
    ticket.id = this.tickets.length + 1;
    this.tickets.push(ticket);
  }
}
