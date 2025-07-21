import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Shipment } from '../models/shipment.model';
import { mockShipments, SHIPMENT_STATUSES } from '../data/shipments.data';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  constructor() {}

  getAllShipments(): Observable<Shipment[]> {
    return of(mockShipments).pipe(
      catchError(this.handleError<Shipment[]>('getAllShipments', [])),
    );
  }

  getShipmentById(id: string): Observable<Shipment | undefined> {
    const shipment = mockShipments.find((s) => s.id === id);
    return of(shipment).pipe(
      catchError(this.handleError<Shipment | undefined>('getShipmentById')),
    );
  }

  searchShipments(query: string): Observable<Shipment[]> {
    const searchTerm = query.toLowerCase();
    const results = mockShipments.filter(
      (shipment) =>
        shipment.id.toLowerCase().includes(searchTerm) ||
        shipment.containerNumber.toLowerCase().includes(searchTerm),
    );
    return of(results).pipe(
      catchError(this.handleError<Shipment[]>('searchShipments', [])),
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`[ShipmentService] ${operation} failed:`, error);
      // TODO: send to external logging system, e.g., Sentry, Datadog
      return of(result as T);
    };
  }
}
