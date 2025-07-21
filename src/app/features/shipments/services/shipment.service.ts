import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shipment } from '../models/shipment.model';
import { mockShipments, SHIPMENT_STATUSES, SHIPMENT_STATUS_COLORS } from '../data/shipments.data';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  constructor() {}

  getAllShipments(): Observable<Shipment[]> {
    return of(mockShipments);
  }

  getShipmentById(id: string): Observable<Shipment | undefined> {
    const shipment = mockShipments.find((s) => s.id === id);
    return of(shipment);
  }

  searchShipments(query: string): Observable<Shipment[]> {
    const searchTerm = query.toLowerCase();
    const results = mockShipments.filter(
      (shipment) =>
        shipment.id.toLowerCase().includes(searchTerm) ||
        shipment.containerNumber.toLowerCase().includes(searchTerm),
    );
    return of(results);
  }

  getShipmentStatusColor(status: keyof typeof SHIPMENT_STATUSES): string {
    return SHIPMENT_STATUS_COLORS[status];
  }
}
