import { Routes } from '@angular/router';
import { ShipmentListComponent } from './features/shipments/components/shipment-list/shipment-list.component';
import { ShipmentDetailComponent } from './features/shipments/components/shipment-detail/shipment-detail.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'shipments',
    pathMatch: 'full',
  },
  {
    path: 'shipments',
    component: ShipmentListComponent,
    title: 'Shipments',
    data: { animation: 'ShipmentsPage' },
  },
  {
    path: 'shipments/:id',
    component: ShipmentDetailComponent,
    title: 'Shipment Details',
    data: { animation: 'ShipmentDetailPage' },
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
    data: { animation: 'AboutPage' },
  },
  {
    path: '**',
    redirectTo: 'shipments',
  },
];
