"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Kodlooper Dashboard</h1>
        <p className="mb-4">Yönlendiriliyor...</p>
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    </div>
  );
}
