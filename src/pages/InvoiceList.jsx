// src/pages/InvoiceList.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchIcon, FilterIcon } from '@heroicons/react/outline';

function InvoiceList() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const mockInvoices = [
    {
      id: 1,
      invoiceNumber: 'INV-2024-001',
      supplier: 'Global Trading Co.',
      amount: '¥1,250,000',
      dueDate: '2024-02-15',
      status: 'pending',
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{t('invoiceList.title')}</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t('invoiceList.search')}
              className="pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
            <FilterIcon className="h-5 w-5 mr-2" />
            {t('invoiceList.filter')}
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['invoiceNumber', 'supplier', 'amount', 'dueDate', 'status', 'actions'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t(`invoiceList.${header}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-6 py-4 whitespace-nowrap">{invoice.invoiceNumber}</td>
                <td className="px-6 py-4">{invoice.supplier}</td>
                <td className="px-6 py-4">{invoice.amount}</td>
                <td className="px-6 py-4">{invoice.dueDate}</td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {t(`status.${invoice.status}`)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    {t('invoiceList.view')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvoiceList;