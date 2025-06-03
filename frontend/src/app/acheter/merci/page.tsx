'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MerciPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('aPaye', 'true');
    const timer = setTimeout(() => {
      router.push('/generer');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4">🎉 Merci pour ton achat !</h1>
      <p className="text-lg text-slate-700">Redirection vers tes documents en cours...</p>
    </div>
  );
}
