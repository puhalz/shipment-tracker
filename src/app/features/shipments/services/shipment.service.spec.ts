import { TestBed } from '@angular/core/testing';
import { ShipmentService } from './shipment.service';
import { SHIPMENT_STATUSES, mockShipments } from '../data/shipments.data';

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
    service.getShipmentById(id).subscribe((shipment: any) => {
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


});
