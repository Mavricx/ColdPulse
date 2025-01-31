export interface Warehouse {
  id: string;
  name: string;
  image: string;
  temperature: number;
  humidity: number;
  capacity: number;
  items: {
    category: string;
    count: number;
  }[];
  status: 'optimal' | 'warning' | 'critical';
}

export interface Alert {
  id: string;
  warehouseId: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  timestamp: Date;
}