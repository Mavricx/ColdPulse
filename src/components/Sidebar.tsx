import React from 'react';
import { LayoutDashboard, ClipboardList, Bell, Settings, Search } from 'lucide-react';

const navItems = [
  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { id: 'reports', icon: ClipboardList, label: 'Reports' },
  { id: 'alerts', icon: Bell, label: 'Alerts' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <LayoutDashboard className="w-8 h-8 text-blue-600" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">ColdPulse</h1>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search warehouses..."
          className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg 
                   border border-gray-200 dark:border-gray-600 focus:ring-2 
                   focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onPageChange(item.id)}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors
                      ${currentPage === item.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}