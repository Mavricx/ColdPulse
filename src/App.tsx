import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Overview } from './pages/Overview';
import { Reports } from './pages/Reports';
import { Alerts } from './pages/Alerts';
import { Settings } from './pages/Settings';
import type { Alert } from './types/warehouse';

const initialAlerts: Alert[] = [
  {
    id: '1',
    warehouseId: '2',
    message: 'High temperature detected in South Logistics Hub',
    type: 'warning',
    timestamp: new Date(),
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);

  const dismissAlert = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview alerts={alerts} onDismissAlert={dismissAlert} />;
      case 'reports':
        return <Reports />;
      case 'alerts':
        return <Alerts alerts={alerts} onDismissAlert={dismissAlert} />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview alerts={alerts} onDismissAlert={dismissAlert} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;