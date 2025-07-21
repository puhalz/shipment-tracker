import { Shipment, ShipmentStatus } from './shipment.model';

describe('Shipment Model', () => {
  it('should define Shipment interface fields', () => {
    const shipment: Shipment = {
      id: 'id',
      containerNumber: 'cont',
      origin: 'origin',
      destination: 'dest',
      status: 'IN_TRANSIT',
      departureDate: new Date(),
      estimatedArrivalDate: new Date(),
      currentLocation: 'here',
      statusHistory: [],
      get history() {
        return this.statusHistory;
      },
    };
    expect(shipment.id).toBe('id');
    expect(Array.isArray(shipment.statusHistory)).toBeTrue();
  });

  it('should define ShipmentStatus interface fields', () => {
    const status: ShipmentStatus = {
      status: 'DELIVERED',
      timestamp: new Date(),
      location: 'loc',
      notes: 'note',
      completed: true,
    };
    expect(status.status).toBe('DELIVERED');
    expect(typeof status.location).toBe('string');
  });
});
