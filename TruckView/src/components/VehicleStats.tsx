import React from 'react';
import { Thermometer, Droplets, Gauge, Box, Battery, File as Oil } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
}

const StatCard = ({ icon, label, value, unit }: StatCardProps) => (
  <div className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-3">
    <div className="text-blue-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-semibold">
        {value} <span className="text-sm text-gray-500">{unit}</span>
      </p>
    </div>
  </div>
);

export default function VehicleStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        icon={<Thermometer size={24} />}
        label="Cargo Temp"
        value="4.5"
        unit="°C"
      />
      <StatCard
        icon={<Droplets size={24} />}
        label="Humidity"
        value="65"
        unit="%"
      />
      <StatCard
        icon={<Gauge size={24} />}
        label="Speed"
        value="65"
        unit="km/h"
      />
      <StatCard
        icon={<Battery size={24} />}
        label="Battery"
        value="85"
        unit="%"
      />
      <StatCard
        icon={<Oil size={24} />}
        label="Oil Temp"
        value="90"
        unit="°C"
      />
      <StatCard
        icon={<Box size={24} />}
        label="Cargo Weight"
        value="12.5"
        unit="t"
      />
    </div>
  );
}