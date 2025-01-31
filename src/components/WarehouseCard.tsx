import React from 'react';
import { Thermometer, Droplets, Package } from 'lucide-react';
import type { Warehouse } from '../types/warehouse';

interface WarehouseCardProps {
  warehouse: Warehouse;
}

export function WarehouseCard({ warehouse }: WarehouseCardProps) {
  const getTemperatureColor = (temp: number) => {
    if (temp < 15) return 'text-blue-500';
    if (temp > 25) return 'text-red-500';
    return 'text-green-500';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                    transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          src={warehouse.image}
          alt={warehouse.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {warehouse.name}
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className={getTemperatureColor(warehouse.temperature)} />
              <span className="text-gray-600 dark:text-gray-300">Temperature</span>
            </div>
            <span className={`font-medium ${getTemperatureColor(warehouse.temperature)}`}>
              {warehouse.temperature}°C
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">Humidity</span>
            </div>
            <span className="font-medium text-blue-500">{warehouse.humidity}%</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="text-purple-500" />
                <span className="text-gray-600 dark:text-gray-300">Capacity</span>
              </div>
              <span className="font-medium text-purple-500">{warehouse.capacity}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${warehouse.capacity}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}