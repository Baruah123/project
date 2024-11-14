import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Home,
  Users,
  Globe,
  Map,
  Building2,
  FileText,
  Lock,
  LogOut,
} from 'lucide-react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: Users, label: 'Gender Master', path: 'gender' },
    { icon: Globe, label: 'Country Master', path: 'country' },
    { icon: Map, label: 'State Master', path: 'state' },
    { icon: Building2, label: 'City Master', path: 'city' },
    { icon: FileText, label: 'Reports', path: 'reports' },
    { icon: Lock, label: 'Change Password', path: 'change-password' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white shadow-xl transition-all duration-300 hover:w-72 border-r border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2 transition-transform hover:scale-105">
            <Home className="h-6 w-6 text-blue-400" />
            <span className="font-semibold text-lg">Dashboard</span>
          </div>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-700 transition-all duration-200 
                hover:translate-x-2 border-l-4 border-transparent hover:border-blue-400"
            >
              <item.icon className="h-5 w-5 text-gray-300 group-hover:text-blue-400" />
              <span className="transition-colors duration-200 hover:text-blue-400">
                {item.label}
              </span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-red-600/20 
              transition-colors duration-200 text-left mt-4 border-l-4 border-transparent 
              hover:border-red-500 group"
          >
            <LogOut className="h-5 w-5 text-gray-300 group-hover:text-red-400" />
            <span className="group-hover:text-red-400">Logout</span>
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-50">
        <header className="bg-white shadow-md transition-all duration-300">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-900 flex items-center space-x-2">
              <span>Welcome,</span>
              <span className="text-blue-600 hover:text-blue-700 transition-colors">
                {user?.name}
              </span>
            </h1>
          </div>
        </header>

        <main className="p-6">
          <div className="transition-all duration-300 ease-in-out">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

const DashboardHome = () => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
    transform hover:-translate-y-1">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
      Welcome to Dashboard
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Here you can perform all given tasks given in left Panel. Select any option to get started.
    </p>
  </div>
);

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="gender" element={<div>Gender Master</div>} />
        <Route path="country" element={<div>Country Master</div>} />
        <Route path="state" element={<div>State Master</div>} />
        <Route path="city" element={<div>City Master</div>} />
        <Route path="reports" element={<div>Reports</div>} />
        <Route path="change-password" element={<div>Change Password</div>} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;