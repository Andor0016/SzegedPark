
import { Injectable } from '@angular/core';
import { Concert } from '../models/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  private concerts: Concert[] = [
    {
      id: 1,
      title: 'Coldplay',
      date: new Date('2025-05-15'),
      location: 'Budapest Aréna',
      description: 'Színes fényshow és nagy hangulat!',
      availableTickets: 120
    },
    {
      id: 2,
      title: 'Imagine Dragons',
      date: new Date('2025-06-10'),
      location: 'Szegedi Sportcsarnok',
      description: 'Lendületes rock koncert.',
      availableTickets: 80
    }
  ];

  getConcerts(): Concert[] {
    return this.concerts;
  }

  addConcert(concert: Concert): void {
    concert.id = this.concerts.length + 1;
    this.concerts.push(concert);
  }
}
