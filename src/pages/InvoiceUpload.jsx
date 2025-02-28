// src/pages/InvoiceUpload.jsx
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import { CloudUploadIcon } from '@heroicons/react/outline';

function InvoiceUpload() {
  const { t } = useTranslation();

  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload
    console.log('Accepted files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
    multiple: true,
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t('invoiceUpload.title')}</h2>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-500'}`}
      >
        <input {...getInputProps()} />
        <CloudUploadIcon className="h-12 w-12 mx-auto text-gray-400" />
        <p className="mt-4 text-lg text-gray-600">
          {isDragActive
            ? t('invoiceUpload.dropHere')
            : t('invoiceUpload.dragAndDrop')}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          {t('invoiceUpload.supportedFormats')}
        </p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">{t('invoiceUpload.uploadHistory')}</h3>
        <div className="border rounded-lg divide-y">
          {/* Upload history items would go here */}
          <div className="p-4 text-center text-gray-500">
            {t('invoiceUpload.noUploads')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceUpload;