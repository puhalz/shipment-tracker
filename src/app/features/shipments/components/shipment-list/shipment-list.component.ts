import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Shipment } from 'src/app/features/shipments/models/shipment.model';
import { SHIPMENT_STATUSES } from 'src/app/features/shipments/data/shipments.data';
import { ShipmentService } from 'src/app/features/shipments/services/shipment.service';

@Component({
  selector: 'app-shipment-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss'],
})
export class ShipmentListComponent implements OnInit {
  shipmentService = inject(ShipmentService);

  shipments: Shipment[] = [];
  searchQuery = '';
  filteredShipments: Shipment[] = [];
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadShipments();
  }

  loadShipments(): void {
    this.loading = true;
    this.error = null;

    this.shipmentService.getAllShipments().subscribe({
      next: (shipments) => {
        this.shipments = shipments;
        this.filteredShipments = [...shipments];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading shipments:', err);
        this.error = 'Failed to load shipments. Please try again later.';
        this.loading = false;
      },
    });
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.shipmentService.searchShipments(query).subscribe({
      next: (results) => {
        this.filteredShipments = results;
      },
      error: (err) => {
        console.error('Error searching shipments:', err);
        this.error = 'Failed to search shipments. Please try again.';
      },
    });
  }

  // Public method to get status color for the template
  getStatusColor(status: string): string {
    return this.shipmentService.getShipmentStatusColor(status as keyof typeof SHIPMENT_STATUSES);
  }
}
