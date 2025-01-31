import React from 'react';
import { AlertBanner } from '../components/AlertBanner';
import { Bell, BellOff, Filter } from 'lucide-react';
import type { Alert } from '../types/warehouse';

interface AlertsProps {
  alerts: Alert[];
  onDismissAlert: (id: string) => void;
}

export function Alerts({ alerts, onDismissAlert }: AlertsProps) {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Alerts</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Monitor and manage warehouse alerts
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {alerts.length > 0 ? (
        <div className="space-y-4">
          {alerts.map(alert => (
            <AlertBanner
              key={alert.id}
              alert={alert}
              onDismiss={onDismissAlert}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
            <BellOff className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No Active Alerts
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            All warehouse conditions are currently optimal
          </p>
        </div>
      )}
    </div>
  );
}