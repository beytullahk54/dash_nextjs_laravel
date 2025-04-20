# Laravel + Next.js Dashboard Projesi

Bu proje, Laravel Sanctum tabanlı bir API ve buna bağlı birden fazla Next.js tabanlı dashboard uygulamasını barındıran bir yapıdır. Amaç, Laravel üzerinden API token'ı ile kimlik doğrulaması yaparak farklı frontend panellerinde güvenli giriş işlemlerini sağlamaktır.

## Proje Bileşenleri

### 🎯 Backend
- **Laravel (Sanctum ile)**
  - API tabanlı kimlik doğrulama (token bazlı)
  - Giriş ve kullanıcı yönetimi endpointleri

### 🧩 Frontend (Next.js Projeleri)

#### 1. `Shacdn`
- Laravel API ile token tabanlı giriş yapılabiliyor.
- Kimlik doğrulama için [NextAuth](https://next-auth.js.org/) kullanıldı.
- Şu an için giriş akışı aktif.

#### 2. `daisyui`
- Tailwind CSS tabanlı arayüz bileşenleri içeriyor.
- Giriş işlemi henüz entegre edilmedi.

### 📌 Planlananlar
- **MUI (Material UI)** entegrasyonu ile 3. bir dashboard eklenmesi planlanıyor.
- Daha esnek ve farklı temalara sahip panellerin desteklenmesi.

## Kurulum

### Backend (Laravel)

```bash
cd laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

cd nextjs/daisyui
yarn install
yarn dev

cd nextjs/shacdn
yarn install
yarn dev


