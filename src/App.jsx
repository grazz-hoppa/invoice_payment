// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import InvoiceList from './pages/InvoiceList';
import InvoiceUpload from './pages/InvoiceUpload';
import ApprovalFlow from './pages/ApprovalFlow';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/invoices" element={<InvoiceList />} />
                <Route path="/upload" element={<InvoiceUpload />} />
                <Route path="/approval" element={<ApprovalFlow />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;