import React from 'react';
import { WarehouseCard } from '../components/WarehouseCard';
import { AlertBanner } from '../components/AlertBanner';
import type { Warehouse, Alert } from '../types/warehouse';

// Sample data
const warehouses: Warehouse[] = [
  {
    id: '1',
    name: 'North Distribution Center',
    image: 'https://plus.unsplash.com/premium_photo-1661964384707-62b609a8eac5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0cyUyMHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    temperature: 22,
    humidity: 45,
    capacity: 78,
    items: [
      { category: 'Electronics', count: 1200 },
      { category: 'Furniture', count: 350 },
    ],
    status: 'optimal',
  },
  {
    id: '2',
    name: 'South Logistics Hub',
    image: 'https://images.unsplash.com/photo-1601600852270-d2550a3c0fb6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZydWl0cyUyMHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    temperature: 28,
    humidity: 60,
    capacity: 92,
    items: [
      { category: 'Clothing', count: 5000 },
      { category: 'Accessories', count: 2300 },
    ],
    status: 'warning',
  },
  {
    id: '3',
    name: 'East Storage Facility',
    image: 'https://plus.unsplash.com/premium_photo-1661953525392-ad1893acd9dd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXRzJTIwd2FyZWhvdXNlfGVufDB8fDB8fHww',
    temperature: 18,
    humidity: 40,
    capacity: 45,
    items: [
      { category: 'Food', count: 3200 },
      { category: 'Beverages', count: 1800 },
    ],
    status: 'optimal',
  },{
    id: '4',
    name: 'West Distribution Center',
    image: 'https://plus.unsplash.com/premium_photo-1663040001568-f07cab70d71f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fHww',
    temperature: 25,
    humidity: 50,
    capacity: 85,
    items: [
      { category: 'Machinery', count: 900 },
      { category: 'Tools', count: 1500 },
    ],
    status: 'optimal',
},
{
    id: '5',
    name: 'Central Warehouse',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZWhvdXNlfGVufDB8fDB8fHww',
    temperature: 30,
    humidity: 65,
    capacity: 95,
    items: [
      { category: 'Medical Supplies', count: 4000 },
      { category: 'Pharmaceuticals', count: 1200 },
    ],
    status: 'warning',
},
{
    id: '6',
    name: 'Northwest Depot',
    image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FyZWhvdXNlfGVufDB8fDB8fHww',
    temperature: 20,
    humidity: 42,
    capacity: 70,
    items: [
      { category: 'Books', count: 3000 },
      { category: 'Stationery', count: 2500 },
    ],
    status: 'optimal',
},
{
    id: '7',
    name: 'Southeast Storage Hub',
    image: 'https://plus.unsplash.com/premium_photo-1682126439054-76870321cd30?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZydWl0cyUyMHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    temperature: 27,
    humidity: 55,
    capacity: 88,
    items: [
      { category: 'Toys', count: 1800 },
      { category: 'Games', count: 2200 },
    ],
    status: 'warning',
},
{
    id: '8',
    name: 'Midwest Logistics Center',
    image: 'https://images.unsplash.com/photo-1549194388-2469d59ec75c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    temperature: 23,
    humidity: 48,
    capacity: 80,
    items: [
      { category: 'Automobile Parts', count: 1300 },
      { category: 'Batteries', count: 900 },
    ],
    status: 'optimal',
}

];

interface OverviewProps {
  alerts: Alert[];
  onDismissAlert: (id: string) => void;
}

export function Overview({ alerts, onDismissAlert }: OverviewProps) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Warehouse Overview
        </h2>
        
        {alerts.map(alert => (
          <AlertBanner
            key={alert.id}
            alert={alert}
            onDismiss={onDismissAlert}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouses.map(warehouse => (
          <WarehouseCard key={warehouse.id} warehouse={warehouse} />
        ))}
      </div>
    </>
  );
}