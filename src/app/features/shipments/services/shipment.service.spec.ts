import { TestBed } from '@angular/core/testing';
import { ShipmentService } from './shipment.service';
import { SHIPMENT_STATUSES, SHIPMENT_STATUS_COLORS, mockShipments } from '../data/shipments.data';

describe('ShipmentService', () => {
  let service: ShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all shipments', (done) => {
    service.getAllShipments().subscribe((shipments) => {
      expect(shipments).toEqual(mockShipments);
      done();
    });
  });

  it('should get shipment by id', (done) => {
    const id = mockShipments[0].id;
    service.getShipmentById(id).subscribe((shipment) => {
      expect(shipment?.id).toBe(id);
      done();
    });
  });

  it('should search shipments', (done) => {
    service.searchShipments('MAEU').subscribe((results) => {
      expect(Array.isArray(results)).toBeTrue();
      expect(results.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should get status color', () => {
    expect(service.getShipmentStatusColor('IN_TRANSIT')).toBe(
      SHIPMENT_STATUS_COLORS[SHIPMENT_STATUSES.IN_TRANSIT],
    );
  });
});
