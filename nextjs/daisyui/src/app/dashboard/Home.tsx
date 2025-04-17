import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon, color = "primary" }) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className={`stat-figure text-${color}`}>
          {icon}
        </div>
        <div className="stat-title">{title}</div>
        <div className={`stat-value text-${color}`}>{value}</div>
        <div className="stat-desc">{description}</div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Genel Bakış</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Toplam Beğeni"
          value="25.6K"
          description="21% daha fazla geçen aya göre"
          color="primary"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          }
        />
        
        <StatCard
          title="Sayfa Görüntüleme"
          value="2.6M"
          description="14% daha fazla geçen aya göre"
          color="secondary"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          }
        />
        
        <StatCard
          title="Yeni Kullanıcılar"
          value="4,200"
          description="↗︎ 400 (22%)"
          color="accent"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          }
        />
        
        <StatCard
          title="Yeni Siparişler"
          value="1,200"
          description="↘︎ 90 (14%)"
          color="info"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
            </svg>
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Son Etkinlikler</h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th>Kullanıcı</th>
                    <th>Etkinlik</th>
                    <th>Zaman</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ahmet Yılmaz</td>
                    <td>Yeni sipariş oluşturdu</td>
                    <td>10 dakika önce</td>
                  </tr>
                  <tr>
                    <td>Mehmet Kaya</td>
                    <td>Ürün güncelledi</td>
                    <td>1 saat önce</td>
                  </tr>
                  <tr>
                    <td>Ayşe Demir</td>
                    <td>Destek talebi açtı</td>
                    <td>2 saat önce</td>
                  </tr>
                  <tr>
                    <td>Fatma Şahin</td>
                    <td>Yeni blog yazısı ekledi</td>
                    <td>3 saat önce</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Yapılacaklar</h2>
            <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Yeni görev ekle..." className="input input-bordered w-full" />
                <button className="btn btn-square btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="ml-2">Haftalık raporu hazırla</span>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
                <span className="ml-2 line-through">Müşteri toplantısı için sunum hazırla</span>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="ml-2">Yeni ürünleri sisteme ekle</span>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="ml-2">Sosyal medya içeriklerini planla</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Son Siparişler</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Sipariş No</th>
                  <th>Müşteri</th>
                  <th>Tarih</th>
                  <th>Tutar</th>
                  <th>Durum</th>
                  <th>İşlem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1234</td>
                  <td>Ali Yılmaz</td>
                  <td>14.06.2023</td>
                  <td>1250 ₺</td>
                  <td><div className="badge badge-success">Tamamlandı</div></td>
                  <td><button className="btn btn-xs btn-outline">Detay</button></td>
                </tr>
                <tr>
                  <td>#1235</td>
                  <td>Zeynep Kaya</td>
                  <td>14.06.2023</td>
                  <td>850 ₺</td>
                  <td><div className="badge badge-warning">İşlemde</div></td>
                  <td><button className="btn btn-xs btn-outline">Detay</button></td>
                </tr>
                <tr>
                  <td>#1236</td>
                  <td>Mehmet Demir</td>
                  <td>13.06.2023</td>
                  <td>2300 ₺</td>
                  <td><div className="badge badge-info">Kargoda</div></td>
                  <td><button className="btn btn-xs btn-outline">Detay</button></td>
                </tr>
                <tr>
                  <td>#1237</td>
                  <td>Ayşe Şahin</td>
                  <td>13.06.2023</td>
                  <td>1750 ₺</td>
                  <td><div className="badge badge-error">İptal</div></td>
                  <td><button className="btn btn-xs btn-outline">Detay</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 