import React from 'react';
import { Truck, Menu, AlertTriangle, RotateCw } from 'lucide-react';
import Map from './components/Map';
import VehicleStats from './components/VehicleStats';

function Alert({ icon: Icon, message }: { icon: React.ElementType; message: string }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 flex items-center space-x-2">
      <Icon size={20} className="text-red-600" />
      <span className="font-medium">{message}</span>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Alerts Container - Fixed position with higher z-index */}
      <div className="fixed top-0 left-0 right-0 z-[60] space-y-2">
        <Alert 
          icon={AlertTriangle} 
          message="Cooling system failure detected"
        />
        <Alert 
          icon={RotateCw} 
          message="Re-routing to nearest warehouse"
        />
      </div>

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Truck size={24} />
            <h1 className="text-xl font-bold">TruckTrack</h1>
          </div>
          <button className="p-2 hover:bg-blue-700 rounded-lg">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Map Section */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Navigation</h2>
          <Map />
        </section>

        {/* Vehicle Stats Section */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Vehicle Status</h2>
          <VehicleStats />
        </section>
      </main>
    </div>
  );
}

export default App;