import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"

export default function Statistics() {
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 p-8">
            <h1 className="text-3xl font-bold mb-8">Ayarlar</h1>
            
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            Ayarlar buraya gelecek
          </div>
        </div>
      </div>
    </div>
  )
}
