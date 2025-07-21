import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentListComponent } from './shipment-list.component';
import { ShipmentService } from 'src/app/features/shipments/services/shipment.service';
import { of } from 'rxjs';

describe('ShipmentListComponent', () => {
  let component: ShipmentListComponent;
  let fixture: ComponentFixture<ShipmentListComponent>;
  let shipmentServiceSpy: jasmine.SpyObj<ShipmentService>;

  beforeEach(async () => {
    shipmentServiceSpy = jasmine.createSpyObj('ShipmentService', [
      'getAllShipments',
      'searchShipments',
    ]);
    shipmentServiceSpy.getAllShipments.and.returnValue(of([]));
    shipmentServiceSpy.searchShipments.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      imports: [ShipmentListComponent],
      providers: [{ provide: ShipmentService, useValue: shipmentServiceSpy }],
    }).compileComponents();
    fixture = TestBed.createComponent(ShipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
