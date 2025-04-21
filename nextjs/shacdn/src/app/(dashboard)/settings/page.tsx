"use client"

import { useEffect, useCallback } from "react";
import { useRouter } from 'next/router';

export default function Settings() {
  const { data: session } = useSession();
  const router = useRouter();

  const fetchUsersCallback = useCallback(() => {
    if (session?.accessToken) {
      
    }else{
      router.push('/'); // Anasayfaya yönlendir
    }
    
  }, [session?.accessToken]);

  useEffect(() => {
    fetchUsersCallback();
  }, [fetchUsersCallback]);
  
  return (
    <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-8">Ayarlar</h1>
        
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        Ayarlar buraya gelecek
      </div>
    </div>
  )
}
