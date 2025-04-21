// src/app/(dashboard)/layout.tsx
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { useRouter } from 'next/router';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Eğer session yoksa veya yükleniyorsa login sayfasına yönlendir
  if (status === 'loading') {
    return <div>Loading...</div> // Opsiyonel: yüklenme durumu
  }

  if (!session) {
    router.push('/login') // Login sayfasına yönlendir
    return null // Yönlendirme yapıldığı için render edilmiyor
  }
  
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
