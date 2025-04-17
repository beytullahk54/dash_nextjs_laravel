import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-0 -ml-64'} transition-all duration-300 bg-white min-h-[calc(100vh-64px)] shadow-lg border-r border-gray-100`}>
      <ul className="menu p-4 w-full text-gray-700">
        <li><Link href="/dashboard" className="font-medium text-primary">Ana Sayfa</Link></li>
        <li>
          <details>
            <summary>Raporlar</summary>
            <ul>
              <li><Link href="/dashboard/reports/daily">Günlük</Link></li>
              <li><Link href="/dashboard/reports/weekly">Haftalık</Link></li>
              <li><Link href="/dashboard/reports/monthly">Aylık</Link></li>
            </ul>
          </details>
        </li>
        <li><Link href="/dashboard/users">Kullanıcılar</Link></li>
        <li><Link href="/dashboard/products">Ürünler</Link></li>
        <li><Link href="/dashboard/orders">Siparişler</Link></li>
        <li><Link href="/dashboard/settings">Ayarlar</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar; 