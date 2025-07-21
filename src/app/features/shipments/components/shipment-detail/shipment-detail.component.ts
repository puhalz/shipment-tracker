import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Shipment } from 'src/app/features/shipments/models/shipment.model';
import { SHIPMENT_STATUSES } from 'src/app/features/shipments/data/shipments.data';
import { ShipmentService } from 'src/app/features/shipments/services/shipment.service';

@Component({
  selector: 'app-shipment-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss'],
})
export class ShipmentDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private shipmentService = inject(ShipmentService);

  shipment: Shipment | null = null;
  loading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadShipment(id);
      } else {
        this.error = 'No shipment ID provided';
        this.loading = false;
      }
    });
  }

  loadShipment(id: string): void {
    this.loading = true;
    this.error = null;

    this.shipmentService.getShipmentById(id).subscribe({
      next: (data) => {
        if (data) {
          this.shipment = data;
        } else {
          this.error = 'Shipment not found';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading shipment:', err);
        this.error = 'Failed to load shipment details. Please try again later.';
        this.loading = false;
      },
    });
  }
}
