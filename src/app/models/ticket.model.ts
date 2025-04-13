export interface Ticket {
  id: number;
  concertId: number;
  price: number;
  category: 'VIP' | 'Standard' | 'Student';
}
