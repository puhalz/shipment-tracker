import { Shipment } from '../models/shipment.model';

export const SHIPMENT_STATUSES = {
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  DELAYED: 'DELAYED',
} as const;


export const mockShipments: Shipment[] = [
  {
    id: 'SHP001',
    containerNumber: 'MAEU1234567',
    origin: 'Rotterdam, Netherlands',
    destination: 'Shanghai, China',
    status: SHIPMENT_STATUSES.IN_TRANSIT,
    departureDate: new Date('2025-07-10'),
    estimatedArrivalDate: new Date('2025-08-01'),
    currentLocation: 'Indian Ocean',
    carrier: 'Maersk',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-10'),
        location: 'Rotterdam, Netherlands',
        notes: 'Departed from Rotterdam',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-12'),
        location: 'English Channel',
        notes: 'Passed through English Channel',
        completed: false,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
  {
    id: 'SHP002',
    containerNumber: 'MAEU2345678',
    origin: 'Singapore',
    destination: 'Los Angeles, USA',
    status: SHIPMENT_STATUSES.DELAYED,
    departureDate: new Date('2025-07-05'),
    estimatedArrivalDate: new Date('2025-07-28'),
    currentLocation: 'Pacific Ocean',
    carrier: 'CMA CGM',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-05'),
        location: 'Singapore',
        notes: 'Departed from Singapore',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.DELAYED,
        timestamp: new Date('2025-07-15'),
        location: 'Pacific Ocean',
        notes: 'Delayed due to weather',
        completed: false,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
  {
    id: 'SHP003',
    containerNumber: 'MAEU3456789',
    origin: 'Busan, South Korea',
    destination: 'Rotterdam, Netherlands',
    status: SHIPMENT_STATUSES.DELIVERED,
    departureDate: new Date('2025-06-20'),
    estimatedArrivalDate: new Date('2025-07-10'),
    currentLocation: 'Rotterdam, Netherlands',
    carrier: 'Hapag-Lloyd',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-06-20'),
        location: 'Busan, South Korea',
        notes: 'Departed from Busan',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.DELIVERED,
        timestamp: new Date('2025-07-10'),
        location: 'Rotterdam, Netherlands',
        notes: 'Arrived at Rotterdam',
        completed: true,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
  {
    id: 'SHP004',
    containerNumber: 'COSU4567890',
    origin: 'Valencia, Spain',
    destination: 'Port Klang, Malaysia',
    status: SHIPMENT_STATUSES.IN_TRANSIT,
    departureDate: new Date('2025-07-12'),
    estimatedArrivalDate: new Date('2025-08-04'),
    currentLocation: 'Suez Canal',
    carrier: 'COSCO',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-12'),
        location: 'Valencia, Spain',
        notes: 'Departed from Valencia',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-18'),
        location: 'Suez Canal',
        notes: 'Passing through Suez Canal',
        completed: false,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
  {
    id: 'SHP005',
    containerNumber: 'ONEU5678901',
    origin: 'Tokyo, Japan',
    destination: 'Seattle, USA',
    status: SHIPMENT_STATUSES.DELAYED,
    departureDate: new Date('2025-07-01'),
    estimatedArrivalDate: new Date('2025-07-27'),
    currentLocation: 'Pacific Ocean',
    carrier: 'ONE',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-01'),
        location: 'Tokyo, Japan',
        notes: 'Departed from Tokyo',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.DELAYED,
        timestamp: new Date('2025-07-20'),
        location: 'Pacific Ocean',
        notes: 'Engine issue, awaiting repair',
        completed: false,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
  {
    id: 'SHP006',
    containerNumber: 'HLCU6789012',
    origin: 'Hamburg, Germany',
    destination: 'Cape Town, South Africa',
    status: SHIPMENT_STATUSES.IN_TRANSIT,
    departureDate: new Date('2025-07-03'),
    estimatedArrivalDate: new Date('2025-07-30'),
    currentLocation: 'Atlantic Ocean',
    carrier: 'Hapag-Lloyd',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-03'),
        location: 'Hamburg, Germany',
        notes: 'Departed from Hamburg',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-15'),
        location: 'Atlantic Ocean',
        notes: 'Midway through Atlantic',
        completed: false,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
  {
    id: 'SHP007',
    containerNumber: 'MSCU7890123',
    origin: 'Durban, South Africa',
    destination: 'Mumbai, India',
    status: SHIPMENT_STATUSES.DELIVERED,
    departureDate: new Date('2025-06-15'),
    estimatedArrivalDate: new Date('2025-07-05'),
    currentLocation: 'Mumbai, India',
    carrier: 'MSC',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-06-15'),
        location: 'Durban, South Africa',
        notes: 'Departed from Durban',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.DELIVERED,
        timestamp: new Date('2025-07-05'),
        location: 'Mumbai, India',
        notes: 'Arrived at Mumbai',
        completed: true,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
  {
    id: 'SHP008',
    containerNumber: 'EMCU8901234',
    origin: 'New York, USA',
    destination: 'Antwerp, Belgium',
    status: SHIPMENT_STATUSES.IN_TRANSIT,
    departureDate: new Date('2025-07-14'),
    estimatedArrivalDate: new Date('2025-08-08'),
    currentLocation: 'Atlantic Ocean',
    carrier: 'Evergreen',
    statusHistory: [
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-14'),
        location: 'New York, USA',
        notes: 'Departed from New York',
        completed: false,
      },
      {
        status: SHIPMENT_STATUSES.IN_TRANSIT,
        timestamp: new Date('2025-07-18'),
        location: 'Atlantic Ocean',
        notes: 'Crossing Atlantic',
        completed: false,
      },
    ],
    get history() {
      return this.statusHistory;
    },
  },
];
