// src/app/generer/page.tsx
'use client';
import { useState } from 'react';

export default function GenererPage() {
  const [nom, setNom] = useState('');
  const [activite, setActivite] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3003/generate-pack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, activite }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-4">Générer mon pack freelance</h2>
      <input
        className="w-full border p-2 mb-3"
        placeholder="Ton nom complet"
        value={nom}
        onChange={e => setNom(e.target.value)}
      />
      <input
        className="w-full border p-2 mb-3"
        placeholder="Ton activité (ex : développeur)"
        value={activite}
        onChange={e => setActivite(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Générer le pack
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
