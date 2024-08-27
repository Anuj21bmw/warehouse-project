import React from 'react';
import { FaWarehouse } from 'react-icons/fa';

function FeatureCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white">
      <FaWarehouse size={40} className="text-blue-500" />
      <div className="font-bold text-xl mb-2">Warehouse Management</div>
      <p className="text-gray-700 text-base">
        Efficiently manage your warehouse with multiple temperature zones.
      </p>
    </div>
  );
}

export default FeatureCard;
