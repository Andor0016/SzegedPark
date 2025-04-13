
export interface Order {
  id: number;
  userId: number;
  ticketIds: number[];
  totalAmount: number;
  orderDate: Date;
}
