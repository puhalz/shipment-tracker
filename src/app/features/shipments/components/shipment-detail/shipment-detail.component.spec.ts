import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipmentDetailComponent } from './shipment-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ShipmentService } from 'src/app/features/shipments/services/shipment.service';

describe('ShipmentDetailComponent', () => {
  let component: ShipmentDetailComponent;
  let fixture: ComponentFixture<ShipmentDetailComponent>;
  let shipmentServiceSpy: jasmine.SpyObj<ShipmentService>;

  beforeEach(async () => {
    shipmentServiceSpy = jasmine.createSpyObj('ShipmentService', [
      'getShipmentById',
      'getShipmentStatusColor',
    ]);
    await TestBed.configureTestingModule({
      imports: [ShipmentDetailComponent],
      providers: [
        { provide: ShipmentService, useValue: shipmentServiceSpy },
        { provide: ActivatedRoute, useValue: { paramMap: of({ get: () => 'SHP001' }) } },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ShipmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
