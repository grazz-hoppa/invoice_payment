// src/pages/ApprovalFlow.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from '@heroicons/react/outline';

function ApprovalFlow() {
  const { t } = useTranslation();

  const approvalItems = [
    {
      id: 1,
      invoiceNumber: 'INV-2024-001',
      supplier: 'Global Trading Co.',
      amount: '¥1,250,000',
      status: 'pending',
      currentApprover: 'Tanaka Kenji',
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('approvalFlow.title')}</h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 space-y-6">
          {approvalItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-6 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{item.invoiceNumber}</h3>
                  <p className="text-gray-500">{item.supplier}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-yellow-500" />
                  <span className="text-yellow-500">{t('status.pending')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">{t('approvalFlow.amount')}</p>
                  <p className="font-medium">{item.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('approvalFlow.currentApprover')}</p>
                  <p className="font-medium">{item.currentApprover}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                  <XCircleIcon className="h-5 w-5 mr-2" />
                  {t('approvalFlow.reject')}
                </button>
                <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  {t('approvalFlow.approve')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApprovalFlow;