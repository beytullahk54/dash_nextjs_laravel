"use client"

export default function Settings() {
  const { data: session } = useSession();

  const fetchUsersCallback = useCallback(() => {
    if (session?.accessToken) {
      
    }else{
      router.push('/'); // Anasayfaya yönlendir
    }
    
  }, [session?.accessToken]);
  
  return (
    <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-8">Ayarlar</h1>
        
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        Ayarlar buraya gelecek
      </div>
    </div>
  )
}
