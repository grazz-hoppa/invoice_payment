// src/pages/Dashboard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ChartBarIcon,
  CurrencyYenIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';

function Dashboard() {
  const { t } = useTranslation();

  const stats = [
    {
      id: 1,
      name: t('dashboard.pendingInvoices'),
      stat: '12',
      icon: ClockIcon,
      change: '12%',
      changeType: 'increase',
    },
    {
      id: 2,
      name: t('dashboard.totalAmount'),
      stat: '¥2,450,000',
      icon: CurrencyYenIcon,
      change: '2.1%',
      changeType: 'decrease',
    },
    {
      id: 3,
      name: t('dashboard.overdue'),
      stat: '3',
      icon: ExclamationCircleIcon,
      change: '4.75%',
      changeType: 'increase',
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('dashboard.title')}</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden shadow rounded-lg p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-8 w-8 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {item.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {item.stat}
                  </div>
                </dd>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">
          {t('dashboard.monthlyTrend')}
        </h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          <ChartBarIcon className="h-12 w-12" />
          <span className="ml-2">{t('dashboard.chartPlaceholder')}</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;