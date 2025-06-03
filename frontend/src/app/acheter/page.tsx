import Link from 'next/link';

export default function AcheterPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-white text-center">
      <h1 className="text-4xl mb-6 text-black">🔐 Débloquer tous les documents juridiques</h1>
      <p className="text-xl mb-12 text-black">
        Accès illimité à vie ou abonnement mensuel sans engagement
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://buy.stripe.com/8x2aEW1GXgPd0tUcQh6AM04"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg shadow-lg transition-all duration-200"
        >
          ✅ Paiement Unique – 19,90 €
        </a>

        <a
          href="https://buy.stripe.com/fZucN40CTeH55OeaI96AM03"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-lg shadow-lg transition-all duration-200"
        >
          💳 Abonnement – 5,90 €/mois
        </a>
      </div>
    </div>
  );
}
