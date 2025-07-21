export interface ShipmentStatus {
  status: 'IN_TRANSIT' | 'DELIVERED' | 'DELAYED';
  timestamp: Date;
  location: string;
  notes?: string;
  completed?: boolean;
}

export interface Shipment {
  id: string;
  containerNumber: string;
  origin: string;
  destination: string;
  status: 'IN_TRANSIT' | 'DELIVERED' | 'DELAYED';
  departureDate: Date;
  estimatedArrivalDate: Date;
  currentLocation: string;
  statusHistory: ShipmentStatus[];
  notes?: string;
  carrier?: string;
  // For template compatibility, provide a getter for history
  get history(): ShipmentStatus[];
}
