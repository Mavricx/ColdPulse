import React from 'react';
import { 
  Bell, Shield, Users, Warehouse, 
  Thermometer, Droplets, Package, 
  Sliders 
} from 'lucide-react';

const settingsSections = [
  {
    title: 'General',
    icon: Sliders,
    settings: [
      { name: 'System Preferences', description: 'Configure system-wide settings' },
      { name: 'Appearance', description: 'Customize the dashboard theme and layout' },
      { name: 'Language', description: 'Set your preferred language' },
    ],
  },
  {
    title: 'Notifications',
    icon: Bell,
    settings: [
      { name: 'Alert Preferences', description: 'Configure notification settings' },
      { name: 'Email Notifications', description: 'Manage email alert settings' },
      { name: 'Mobile Notifications', description: 'Configure mobile push notifications' },
    ],
  },
  {
    title: 'Warehouse',
    icon: Warehouse,
    settings: [
      { name: 'Temperature Thresholds', description: 'Set temperature alert thresholds' },
      { name: 'Humidity Levels', description: 'Configure humidity parameters' },
      { name: 'Capacity Alerts', description: 'Set capacity warning levels' },
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    settings: [
      { name: 'Access Control', description: 'Manage user permissions' },
      { name: 'Authentication', description: 'Configure login settings' },
      { name: 'Audit Logs', description: 'View system activity logs' },
    ],
  },
];

export function Settings() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Manage your warehouse system preferences
        </p>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div
            key={section.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {section.title}
                </h3>
              </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {section.settings.map((setting) => (
                <div
                  key={setting.name}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {setting.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {setting.description}
                      </p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                      Configure
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}