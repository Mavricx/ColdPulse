import React from 'react';
import { BarChart, LineChart, PieChart } from 'lucide-react';

const reports = [
  {
    title: 'Inventory Turnover',
    description: 'Analysis of stock movement and rotation',
    icon: BarChart,
    period: 'Last 30 days',
    stats: { current: '2.4x', previous: '2.1x' },
  },
  {
    title: 'Temperature Trends',
    description: 'Temperature fluctuations across warehouses',
    icon: LineChart,
    period: 'Last 7 days',
    stats: { current: '23°C', previous: '24°C' },
  },
  {
    title: 'Space Utilization',
    description: 'Warehouse capacity usage analysis',
    icon: PieChart,
    period: 'Current',
    stats: { current: '72%', previous: '65%' },
  },{
    title: 'Order Fulfillment Rate',
    description: 'Percentage of orders processed on time',
    icon: LineChart,
    period: 'Last 30 days',
    stats: { current: '96%', previous: '92%' },
},
{
    title: 'Humidity Levels',
    description: 'Average humidity across storage units',
    icon: PieChart,
    period: 'Last 7 days',
    stats: { current: '50%', previous: '55%' },
},
{
    title: 'Stock Accuracy',
    description: 'Comparison of recorded vs. actual inventory',
    icon: BarChart,
    period: 'Current',
    stats: { current: '98%', previous: '95%' },
}
];

export function Reports() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Reports</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Analyze warehouse performance and trends
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.title}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <report.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {report.period}
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {report.description}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Current</p>
                <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {report.stats.current}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Previous</p>
                <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                  {report.stats.previous}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}