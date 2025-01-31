import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import type { Alert } from '../types/warehouse';

interface AlertBannerProps {
  alert: Alert;
  onDismiss: (id: string) => void;
}

export function AlertBanner({ alert, onDismiss }: AlertBannerProps) {
  const getAlertStyles = () => {
    switch (alert.type) {
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400';
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 rounded-lg mb-4 ${getAlertStyles()}`}>
      <div className="flex items-center gap-3">
        <AlertCircle className="w-5 h-5" />
        <p className="font-medium">{alert.message}</p>
      </div>
      <button
        onClick={() => onDismiss(alert.id)}
        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}