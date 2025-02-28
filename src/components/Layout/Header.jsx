// src/components/Layout/Header.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { UserCircleIcon, BellIcon, GlobeIcon } from '@heroicons/react/outline';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-md h-16">
      <div className="px-6 h-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">{t('header.title')}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative">
            <Menu.Button className="p-2 hover:bg-gray-100 rounded-full">
              <GlobeIcon className="h-6 w-6 text-gray-600" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-40 mt-2 bg-white rounded-md shadow-lg">
              <Menu.Item>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => changeLanguage('ja')}
                >
                  日本語
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => changeLanguage('en')}
                >
                  English
                </button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <BellIcon className="h-6 w-6 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <UserCircleIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;