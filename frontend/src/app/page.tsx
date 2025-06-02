// src/app/page.tsx
'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">🚀 Pack Freelance IA</h1>
      <p className="text-lg mb-6 text-gray-700 max-w-md">
        Générez automatiquement vos CGV, contrats, mentions légales et plus, en quelques clics.
      </p>
      <button
        onClick={() => router.push('/generer')}
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
      >
        Commencer
      </button>
    </div>
  );
}
