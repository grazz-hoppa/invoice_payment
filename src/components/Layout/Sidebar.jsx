// src/components/Layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  HomeIcon,
  DocumentTextIcon,
  CloudUploadIcon,
  CheckCircleIcon,
} from '@heroicons/react/outline';

function Sidebar() {
  const { t } = useTranslation();

  const menuItems = [
    { path: '/', icon: HomeIcon, label: t('sidebar.dashboard') },
    { path: '/invoices', icon: DocumentTextIcon, label: t('sidebar.invoices') },
    { path: '/upload', icon: CloudUploadIcon, label: t('sidebar.upload') },
    { path: '/approval', icon: CheckCircleIcon, label: t('sidebar.approval') },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="text-2xl font-semibold text-center mb-6">
        {t('app.title')}
      </div>
      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`
            }
          >
            <item.icon className="h-6 w-6" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;