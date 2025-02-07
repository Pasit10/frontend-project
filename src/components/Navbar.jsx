import React from 'react';

function Navbar({ activeTab, setActiveTab }) {
  return (
  <nav className="bg-emerald-100 shadow-sm">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      {/* Brand Name */}
      <button onClick={() => setActiveTab('home')} className="text-emerald-800 font-semibold text-lg">Healthy Life</button>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8 ml-auto">
        <button
          onClick={() => setActiveTab('home')}
          className={`px-3 py-2 rounded-md ${
            activeTab === 'home'
              ? 'text-emerald-800 font-medium'
              : 'text-emerald-600 hover:text-emerald-800'
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => setActiveTab('calculator')}
          className={`px-3 py-2 rounded-md ${
            activeTab === 'calculator'
              ? 'text-emerald-800 font-medium'
              : 'text-emerald-600 hover:text-emerald-800'
          }`}
        >
          Calorie Calculator
        </button>
      </div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;