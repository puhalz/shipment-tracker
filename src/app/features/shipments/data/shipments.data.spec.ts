import { mockShipments, SHIPMENT_STATUSES } from './shipments.data';

describe('Shipments Data', () => {
  it('should export mockShipments array', () => {
    expect(Array.isArray(mockShipments)).toBeTrue();
    expect(mockShipments.length).toBeGreaterThan(0);
  });
  it('should export SHIPMENT_STATUSES object', () => {
    expect(SHIPMENT_STATUSES).toBeDefined();
    expect(typeof SHIPMENT_STATUSES).toBe('object');
  });

});
