'use client';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Icons as simple SVG components
const CheckCircle = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
);

const Sparkles = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

const FileText = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const Rocket = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export default function MerciPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  // Fonction de redirection isolée
  const redirectToGenerer = useCallback(() => {
    router.push('/generer');
  }, [router]);

  useEffect(() => {
    // Sauvegarder le statut premium
    if (typeof window !== 'undefined') {
      localStorage.setItem('aPaye', 'true');
    }

    // Timer pour le countdown et la redirection
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Utiliser setTimeout pour éviter l'erreur setState pendant le render
          setTimeout(() => {
            redirectToGenerer();
          }, 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [redirectToGenerer]);

  const documents = [
    'CGV personnalisées',
    'CGU conformes',
    'Mentions légales',
    'Politique RGPD',
    'Contrat freelance',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
      {/* Background celebration effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-yellow-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Floating celebration elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="text-4xl">🎉</div>
      </div>
      <div className="absolute top-32 right-20 animate-bounce delay-500">
        <div className="text-3xl">✨</div>
      </div>
      <div className="absolute bottom-40 left-1/4 animate-bounce delay-700">
        <div className="text-2xl">🚀</div>
      </div>
      <div className="absolute top-1/4 right-1/4 animate-bounce delay-300">
        <div className="text-3xl">🎊</div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="relative inline-flex">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle size={40} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2 animate-spin">
                <Sparkles size={32} className="text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
            Félicitations ! 🎉
          </h1>

          <p className="text-2xl text-slate-700 mb-8 font-medium">
            Ton achat a été confirmé avec succès
          </p>

          {/* Success Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl">
                <FileText className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">Pack Juridique Débloqué</h2>
            </div>

            <p className="text-slate-600 mb-6">
              Tu as maintenant accès à tous tes documents juridiques essentiels :
            </p>

            {/* Documents List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>

            {/* Countdown */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Rocket size={24} className="animate-bounce" />
                <span className="text-xl font-semibold">Redirection automatique</span>
              </div>
              <p className="text-emerald-100 mb-3">Tu vas être redirigé vers tes documents dans</p>
              <div className="text-4xl font-bold animate-pulse">{countdown}s</div>
            </div>
          </div>

          {/* Manual redirect button */}
          <button
            onClick={redirectToGenerer}
            className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <FileText size={24} />
              Accéder à mes documents maintenant
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            </div>
          </button>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-4">
              💡 <strong>Astuce :</strong> Sauvegarde tes documents dans un dossier dédié pour y
              accéder facilement
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <span>✅ Paiement sécurisé</span>
              <span>✅ Accès illimité</span>
              <span>✅ Documents conformes</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
          }
          25% {
            transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, -5vh);
          }
          50% {
            transform: rotateZ(-15deg) rotateY(720deg) translate(5vw, 5vh);
          }
          75% {
            transform: rotateZ(-5deg) rotateY(1080deg) translate(-3vw, -10vh);
          }
          100% {
            transform: rotateZ(15deg) rotateY(1440deg) translate(0, 0);
          }
        }
      `}</style>
    </div>
  );
}
