'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Icons as simple SVG components
const ArrowRight = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
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

const User = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const Briefcase = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const Check = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const Copy = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const Scale = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

const Shield = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Settings = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m6-12h-6m-6 0h6" />
  </svg>
);

const Lock = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const HandShake = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </svg>
);

const Crown = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm0 16h20" />
  </svg>
);

interface DocumentType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  endpoint: string;
  isFree: boolean;
}

export default function PackJuridiqueApp() {
  const router = useRouter();
  const [nom, setNom] = useState('');
  const [activite, setActivite] = useState('');
  const [message, setMessage] = useState('');
  const [texte, setTexte] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [isPremium, setIsPremium] = useState(false);

  // Vérifier le statut premium au montage du composant
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const paidStatus = localStorage.getItem('aPaye') === 'true';
      setIsPremium(paidStatus);
    }
  }, []);

  const documents: DocumentType[] = [
    {
      id: 'mentions',
      title: 'Mentions Légales',
      description: 'Mentions légales obligatoires pour ton site web',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      endpoint: '/generate-mentions',
      isFree: true,
    },
    {
      id: 'cgv',
      title: 'CGV',
      description: 'Conditions générales de vente conformes au droit français',
      icon: Scale,
      color: 'from-blue-500 to-indigo-600',
      endpoint: '/generate-pack',
      isFree: false,
    },
    {
      id: 'cgu',
      title: 'CGU',
      description: "Conditions générales d'utilisation pour ton site/app",
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      endpoint: '/generate-cgu',
      isFree: false,
    },
    {
      id: 'rgpd',
      title: 'Politique RGPD',
      description: 'Politique de confidentialité conforme RGPD',
      icon: Lock,
      color: 'from-red-500 to-orange-600',
      endpoint: '/generate-rgpd',
      isFree: false,
    },
    {
      id: 'contrat',
      title: 'Contrat Simple',
      description: 'Contrat de prestation freelance (sans tableau)',
      icon: HandShake,
      color: 'from-cyan-500 to-blue-600',
      endpoint: '/generate-contract',
      isFree: false,
    },
  ];

  const handleGenerate = async (doc: DocumentType) => {
    // Vérifier si le document nécessite un paiement
    if (!doc.isFree && !isPremium) {
      alert(
        '🔐 Ce document est réservé aux membres premium. Clique sur "Débloquer" pour y accéder.'
      );
      return;
    }

    setLoading(true);
    setMessage('');
    setTexte('');
    setDocumentType(doc.title);

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3003';

    try {
      const res = await fetch(`${backendUrl}${doc.endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, activite }),
      });

      if (!res.ok) throw new Error(`Erreur lors de la génération du ${doc.title}`);
      const data = await res.json();
      setMessage(data.message);
      setTexte(data.cgv || data.document);
    } catch (error) {
      console.error('Erreur:', error);
      setMessage('Erreur de connexion au serveur.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(texte);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const goToAcheter = () => {
    router.push('/acheter');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
              <Sparkles size={16} />
              {isPremium ? 'Premium Activé ✨' : 'Les 5 Essentiels du Freelance'}
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Pack Juridique Complet
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Génère tous tes documents juridiques essentiels conformes au droit français en
              quelques clics
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-slate-600">
              <span className="bg-white/80 px-3 py-1 rounded-full">✓ CGV & CGU</span>
              <span className="bg-white/80 px-3 py-1 rounded-full">✓ Mentions légales</span>
              <span className="bg-white/80 px-3 py-1 rounded-full">✓ RGPD</span>
              <span className="bg-white/80 px-3 py-1 rounded-full">✓ Contrat freelance</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                <User className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">Tes Informations</h2>
              {isPremium && (
                <div className="ml-auto inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <Crown size={12} />
                  Premium
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium mb-3 text-slate-700">
                  <User size={16} className="text-indigo-500" />
                  Nom / Entreprise
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-400"
                  placeholder="Ex : Lucas Digital"
                  value={nom}
                  onChange={e => setNom(e.target.value)}
                />
              </div>

              <div className="group">
                <label className="flex items-center gap-2 text-sm font-medium mb-3 text-slate-700">
                  <Briefcase size={16} className="text-purple-500" />
                  Ton activité
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-200 bg-white/50 backdrop-blur-sm text-slate-900 placeholder-slate-400"
                  placeholder="Ex : Développeur Web"
                  value={activite}
                  onChange={e => setActivite(e.target.value)}
                />
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {documents.map(doc => {
                const IconComponent = doc.icon;
                const isLocked = !doc.isFree && !isPremium;

                return (
                  <button
                    key={doc.id}
                    onClick={() => handleGenerate(doc)}
                    disabled={loading || !nom || !activite}
                    className={`group relative overflow-hidden backdrop-blur-sm border-2 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] ${
                      isLocked
                        ? 'bg-gray-100/50 border-gray-300 hover:border-gray-400'
                        : 'bg-white/50 border-gray-200 hover:border-transparent'
                    }`}
                  >
                    {/* Lock overlay for premium documents */}
                    {isLocked && (
                      <div className="absolute inset-0 bg-gray-200/60 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                        <div className="text-center">
                          <Lock size={24} className="text-gray-500 mx-auto mb-2" />
                          <span className="text-xs text-gray-600 font-medium">Premium</span>
                        </div>
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${doc.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <div className="relative text-center">
                      <div className="relative">
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                            doc.color
                          } text-white mb-3 group-hover:scale-110 transition-transform duration-300 ${
                            isLocked ? 'opacity-60' : ''
                          }`}
                        >
                          <IconComponent size={20} />
                        </div>
                        {doc.isFree && (
                          <div className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                            Gratuit
                          </div>
                        )}
                      </div>

                      <h3
                        className={`text-base font-semibold mb-2 ${
                          isLocked ? 'text-gray-600' : 'text-slate-800'
                        }`}
                      >
                        {doc.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed ${
                          isLocked ? 'text-gray-500' : 'text-slate-600'
                        }`}
                      >
                        {doc.description}
                      </p>

                      {loading && documentType === doc.title && (
                        <div className="absolute inset-0 bg-white/80 rounded-2xl flex items-center justify-center">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-5 h-5 border-2 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin"></div>
                            <span className="text-indigo-600 font-medium text-xs">
                              Génération...
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {(!nom || !activite) && (
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-amber-800 text-sm text-center">
                  ⚠️ Remplis tes infos pour générer tes documents
                </p>
              </div>
            )}

            {message && (
              <div className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 rounded-xl mt-6">
                <Check size={20} className="text-emerald-600" />
                <p className="text-emerald-800 font-medium">{message}</p>
              </div>
            )}

            {/* Premium CTA Button - Only show if not premium */}
            {!isPremium && (
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Crown size={20} className="text-amber-500" />
                  <span className="font-semibold text-slate-800">Débloquer tous les documents</span>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Accède à CGV, CGU, RGPD et contrats pour seulement 19,90€
                </p>
                <button
                  onClick={goToAcheter}
                  className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <Rocket size={18} />
                    Débloquer maintenant
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Result Section */}
          {texte && (
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <FileText className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-800">
                    {documentType} généré ✨
                  </h2>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-600" />
                      <span className="text-emerald-600 text-sm font-medium">Copié!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="text-slate-600" />
                      <span className="text-slate-600 text-sm font-medium">Copier</span>
                    </>
                  )}
                </button>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-gradient-to-br from-slate-50 to-white max-h-[600px] overflow-auto custom-scrollbar">
                <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {texte}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #6366f1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #4f46e5);
        }
      `}</style>
    </div>
  );
}
